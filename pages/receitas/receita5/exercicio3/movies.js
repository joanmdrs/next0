import useSWR from 'swr'
import {useState} from 'react'
import Link from 'next/link'
import react from 'react'

export default function Movies3(){

    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        const link = e.target.id

        e.preventDefault()
        if (url === '') setUrl(link)

        else setUrl('')

    }

    return (

        <div>
            <TheLink url={url} link={'http://www.omdbapi.com/?apikey=a85a78d&s=bagdad'} handler={onClickHandler}/>
            <TheLink url={url} link={'http://www.omdbapi.com/?apikey=a85a78d&s=2012'} handler={onClickHandler} />
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
            { data.Search.map( (m, i) => 
                
                <div key={i}>
                    <Link href={'/receitas/receita5/exercicio3/movies'}><a id={m.imdbID} onClick={loadingMovie}>{m.Title}</a></Link>
                </div>  
            ) }            

        </div>

    )

}




function loadingMovie(e) {

    e.preventDefault()
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=a85a78d&i=${e.target.id}`, theFetcher)
    console.log(data)
  
  }
  


export function TheLink({url, handler, link}){    

    return (

        <div>

            <a href="/receitas/receita5/exercicio1/movies.js" id={link} onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}