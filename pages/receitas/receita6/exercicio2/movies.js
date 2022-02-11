import useSWR from 'swr'
import {useState} from 'react'
import { useForm } from 'react-hook-form'

export function TheForm({filtro, url, acao}){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
            <style jsx>{`
                .form-search-movie {
                    display: flex;
                    flex-direction: column;
                    max-width: 200px;
                    gap: 10px;
                }

                .form-search-movie input {
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid #000;
                    outline: none;
                }

                .form-search-movie button {
                    background-color: #0080FF;
                    color: #fff;
                    padding: 5px;
                    border: none;
                    border-radius: 5px;
                    margin-bottom: 10px;
                    cursor: pointer;
                }

                
            `}</style>
            <form className='form-search-movie' onSubmit={handleSubmit(acao)}>
                <label htmlFor="titleSearchString">{filtro}</label>
                <input id="titleSearchString" {...register("titleSearchString", { required: true, minLength: 3})} type="text" autoComplete="true"/>
                <button type='submit'>{url === '' ? 'Mostrar' : 'Ocultar'}</button>
                {errors.titleSearchString && <span>Insira no mínimo três caracteres   </span>}
            </form>
        </div>
    )
}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)

    if (!data) return (<div></div>)

    if (data.error) return (<div>falha na pesquisa</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    if (data.Response == 'False') return (<div>Não foi encontrado nenhum filme com esse título</div>)

    return (

        <div>
            { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }            
        </div>
    )
}

export default function Movies33(){

    const [state, setState] = useState({url:'', titleSearchString:''});

    const {data, error} = useSWR(state.url, async () => {
        
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}

        const res = await fetch(`${state.url}/?apiKey=a85a78d&s=${state.titleSearchString}`)
        const json = await res.json();
        
        return json

    })


    const onClickHandler = () => {
        
        const s = document.querySelector('#titleSearchString').value
        if (state.url === '') {
            setState({url:'https://www.omdbapi.com',titleSearchString:s})
        }
        else{
            setState({url:'',titleSearchString: state.titleSearchString})
        }
    }



    return (
        <div>
            <TheForm filtro={'Filtro de título'} url={state.url} acao={onClickHandler}/>
            <TheMovies data={error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={state.url !== ''} />
        </div>
    )
}