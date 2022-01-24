import Link from 'next/link'
import styled from 'styled-components'
import Content from './components/home/content'

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
                <Link id='home' href='/'><a>Home</a></Link>
                <Link id='about' href='/components/about/about'><a>About</a></Link>
                <Link id='contact' href='/components/contact/contact'><a>Contact</a></Link>
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






