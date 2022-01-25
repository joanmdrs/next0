import Link from "next/link"
import { Content } from "./components/teste"
export default function Home() {
    return (

        <div>
            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                a {
                    text-decoration: none;
                    color: #1C1C1C;
                    font-weight: 400;
                    font-family: 'Lato', 'sans-serif';
                    font-size: 20px;
                    padding: 5px;
                    margin-top: 50px;
                    padding: 30px 30px 20px 30px;
                    border-top: 1px solid #000000;
                    font-style: italic;
                }
                a:hover {
                    color: #0489B1;
                }
                
                
            `}
            </style>
            
            <Header title='Receita 1' />
            <Content />
            <Link href='/'><a>Página Principal</a></Link>
         
        </div>
    )
}

export function Header({title}) {
    return (
        <div>
            <style jsx>{`
                h2{
                    font-family: 'Lato','sans-serif';
                    color: #0489B1;
                    font-weigth: bold;
                    font-size: 25px;
                    text-align: center;
                    font-style: italic;
                }
            `}

            </style>
            <h2>{title}</h2>

        </div>
    )
}






