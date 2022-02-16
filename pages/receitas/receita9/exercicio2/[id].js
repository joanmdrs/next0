import { useRouter } from 'next/router'


export default function TheAnimes({data}){

   
    const router = useRouter()

    if (router.isFallback) {
      return <div>Carregando...</div>
    }


    const title = data.data.title
    const episodes = data.data.episodes
    const score = data.data.score
    const image = data.data.images.jpg.image_url
    
    return (

        <div className="principal">
            <style jsx>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');
                .principal{
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    padding: 10px;
                    align-items: center;
                    font-family: 'Lato', sans-serif;
                    max-width: 500px;
                    border: 1px solid #000;
                    border-radius: 12px;
                }

                ul {
                    list-style: none;
                }

                ul li {
                    margin-bottom: 5px;
                }
            `}
            </style>

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

        fallback: false 

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