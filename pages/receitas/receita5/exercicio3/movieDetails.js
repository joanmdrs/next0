import useSWR from "swr"

export default function MoviesDetails({url}){

    console.log('fui chamada')
    const {data, error} = useSWR(url, fetcher)
    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
            {data.Title}
        </div>
    )

}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}