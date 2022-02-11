import useSWR from 'swr'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function MoviesDetails(){

    const router = useRouter()
    const {movieID} = router.query
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=a85a78d&i=${movieID}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <div>
            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');


                
                div {
                    display: flex;
                    justify-content: center;
                    
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                    font-family: 'Lato', 'sans-serif';
                    max-width: 500px;
                    list-style: none;
                    border: 1px solid black;
                    border-radius: 12px;
                    gap: 5px;
                    padding: 10px;
                }

                ul li{
                    text-align: justify;
                    padding: 0 20px;
                }
    
            `}
            </style>
            
            <Head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                <title>Testando</title>
            </Head>
            <ul>
                <h2>{data.Title}</h2>
                <img width={200} src={data.Poster}></img>    
                <li>Ano: {data.Year}</li>        
                <li>Classificado: {data.Rated}</li>        
                <li>Liberado: {data.Released}</li>            
                <li>Tempo de execução: {data.Runtime}</li>        
                <li>Gênero: {data.Genre}</li>        
                <li>Diretor: {data.Director}</li>            
                <li>escritor: {data.Writer}</li>        
                <li>Atores: {data.Actors}</li>        
                <li>Enredo: {data.Plot}</li>        
                <li>Língua: {data.Language}</li>            
                <li>País: {data.Country}</li>        
                <li>Prêmios: {data.Awards}</li>    
            </ul>
        </div>
    )    
}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}
