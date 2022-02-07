import {useState} from 'react'

export default function Movies3(){

    const [url, setUrl] = useState('')
    const [data, setData] = useState('')

    const onClickHandler = async (e) => {
        const link = e.target.id

        e.preventDefault()
        if (url === ''){
            setUrl(link)
            const result = await theFetcher(link)
            console.log(result)
            setData(result)
            return Movies3
        }else {
            setUrl('')
            setData('')
            return Movies3
        }

        

    }

    return (

        <div>
            <TheLink url={url} link={'https://www.omdbapi.com/?apikey=a85a78d&s=bagdad'} handler={onClickHandler}/>
            <TheLink url={url} link={'https://www.omdbapi.com/?apikey=a85a78d&s=2012'} handler={onClickHandler} />
            <TheMovies data={data}/>
        </div>

    )

}

async function theFetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}

export function TheMovies({data}){

    if(data == '') return <div></div>

    return (

        <div>
            { data.Search.map( (m, i) => <div key={i}>{m.Title} --- {m.Year}</div>  ) }            

        </div>

    )

}

export function TheLink({url, handler, link}){    

    return (

        <div>

            <a href="/receitas/receita5/exercicio1/movies.js" id={link} onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}
