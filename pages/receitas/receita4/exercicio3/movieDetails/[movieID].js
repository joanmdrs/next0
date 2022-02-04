export default function MoviesDetails3({data}) {

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

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=a85a78d&i=${context.params.movieID}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}