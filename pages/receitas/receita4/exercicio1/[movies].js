import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Movies2(){

    
    const router = useRouter()
    const {movies} = router.query
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=a85a78d&s=${movies}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (    

        <div>
            <Head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            <ul>
                <style jsx>{`

                    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

                    ul {
                        font-family: 'Lato', 'sans-serif';
                        display: flex;
                        max-width: 900px;
                        flex-wrap: wrap;
                    }
                    .movies {
                        display: flex;
                        flex-direction: column;
                        border: 1px solid black;
                        border-radius: 12px;
                        width: 150px;
                        align-items: center;
                        padding: 10px;
                        margin: 20px;
                        gap: 10px;
                        text-align: center;
                        
                    }

                    .movies a{
                        text-decoration: none;
                        color: #1C1C1C;
                    }

                    .movies a:hover{
                        color: #0489B1;
                    }

                    

                `}
                </style>


                {data.Search.map( (m, i) => 
                <div key={i} className='movies'>
                        <Link href={`/receitas/receita4/exercicio1/movieDetails/${m.imdbID}`}>
                        <a>{m.Title}</a>
                        </Link>
                        
                        <img width={100} src={m.Poster}></img>
                </div>
                )}

            </ul>
        </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

