import Image from "next/image"
import Link from "next/link"

export default function Movies({data}){
    return (
        <div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: 'Lato', 'sans-serif';
                }
                h3 {
                    text-align: center;
                    font-style: italic;
                    font-weight: bold;
                    font-size: 25px;
                    padding: 20px;
                    color: #0489B1;
                }
                table {
                    font-family: 'Lato', 'sans-serif';
                    border-collapse: collapse;


                }

                .thead {
                    background-image: linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );
                    color: #FFFFFF;
                }
                table tr th, td{
                    border: 1px solid #6E6E6E;
                    padding: 10px;
                }
                a {
                    text-decoration: none;
                    color: #1C1C1C;
                    font-weight: 400;
                    font-family: 'Lato', 'sans-serif';
                    font-size: 20px;
                    padding: 5px;
                }
                a:hover {
                    color: #0489B1;
                }
                .principal-page{
                    margin-top: 50px;
                    padding: 30px 30px 20px 30px;
                    border-top: 1px solid #000000;
                    font-style: italic;
                }

              
            `}
            </style>

            <h3> Receita 3</h3>
            <table>
                <thead>
                    <tr className="thead"> 
                        <th>Título</th>
                        <th>Ano</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Search.map( (m, i) => <tr key={i}>
                        <td>{m.Title}</td>
                        <td>{m.Year}</td>
                        <td><Image width={200} height={200} src={m.Poster}/></td>
                    </tr>)}  
                </tbody>
            </table>
            <Link href='/'><a className='principal-page'>Página Principal</a></Link>
        </div>

    )

}



export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=a85a78d&s=${context.params.keyword}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}


