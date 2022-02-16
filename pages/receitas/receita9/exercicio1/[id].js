export default function TheAnimes({data}){

   
    if(data === undefined) return <div>Carregando...</div>


    const title = data.data.title
    const episodes = data.data.episodes
    const score = data.data.score
    const image = data.data.images.jpg.image_url
    
    return (

        <div>

            <ul>
                <li> Título: {title}</li>
                <li> Episódios: {episodes} episódio(s)</li>
                <li> Score: {score}</li>
            </ul>

            <div>
                <img src={image} />
            </div>


        </div>     

    )

}

export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "16870"}},

            {params: {id: "34566"}},

            {params: {id: "28765"}},

            {params: {id: "36564"}},

            {params: {id: "442"}},

            {params: {id: "936"}},

            {params: {id: "2144"}},

            {params: {id: "1074"}},

            {params: {id: "12979"}}

        ],

        fallback: true 

    }

}

export async function getStaticProps({ params }) {

    console.log(params)
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}