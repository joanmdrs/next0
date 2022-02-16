import Link from 'next/link'


export default function Home() {
    return (

        <div>
            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

                nav {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    justify-content: center;
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
            `}
            </style>
            <nav>
                <Link id='receita1' href='/receitas/receita1'><a>Receita 1</a></Link>
                <Link id='receita2' href='/receitas/receita2'><a>Receita 2</a></Link>
                <Link id='receita3' href='/receitas/receita3/bagdad'><a>Receita 3</a></Link>
                <Link id='receita4' href='/receitas/receita4'><a>Receita 4</a></Link>
                <Link id='receita5' href='/receitas/receita5'><a>Receita 5</a></Link>
                <Link id='receita6' href='/receitas/receita6'><a>Receita 6</a></Link>
                <Link id='receita9' href='/receitas/receita9'><a>Receita 9</a></Link>

            </nav>
            
            <Header title='Aplicação desenvolvida com Next.js' />
            <Content />
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

export function Content() {
    return (
        <div className="paragrafh">
            <style jsx>{`

                .paragrafh {
                    border-top-left-radius: 15px;
                    background-image: linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );
                    margin-right: 200px;
                    margin-left: 200px;
                    padding: 10px;
                }

                p{
                    font-size: 18px;
                    font-weight: 400;
                    text-align: center;
                    font-family: 'Lato', 'sans-serif';
                    color: #F2F2F2;
                }
            `

            }

            </style>
            <p> 
                Esta aplicação exibe a resolução dos exercícios da disciplina Programação Web, 
                os quais possuem o formato de uma receita.  
            </p>
        </div>
    )
}






