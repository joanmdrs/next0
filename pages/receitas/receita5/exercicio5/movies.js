import useSWR from 'swr'
import {useState} from 'react'

export default function Movies3(){

    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {

        e.preventDefault()

        const keyword = document.getElementById('field-movie').value 
        if (url === '') setUrl(`http://www.omdbapi.com/?apikey=a85a78d&s=${keyword}`)

        else setUrl('')

    }

    return (

        <div>
            <form>
                <input id='field-movie' type='text'></input>
                <button type='submit' onClick={onClickHandler}>Buscar</button>
            </form>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
        </div>

    )

}

async function theFetcher(url) {

    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;

}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)    

    if (data.error) return (<div>falha na requisição</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    return (

        <div>
            { data.Search.map( (m, i) => <div key={i}>{m.Title} --- {m.Year}</div>  ) }            

        </div>

    )

}
