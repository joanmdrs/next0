import Link from "next/link";

export default function About(){
    return (
        <div className="section-about">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');
                .section-about {
                    display: flex;
                    flex-direction: column;
                    font-family: 'Lato', 'sans-serif';
                    align-items: center;
                    margin-top: 20px;
                    gap: 10px;

                }

                h3 {
                    text-align: center;
                    font-style: italic;
                    font-weight: bold;
                    font-size: 25px;
                }

                .section-about div {
                    background-image: linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );
                    padding: 20px;
                    margin-right: 200px;
                    margin-left: 200px;
                    border-radius: 5px;
                    border-top-left-radius: 30px;

                }

                p {
                    color: #FFFFFF;
                }
                a {
                    margin-top: 20px;
                    text-decoration: none;
                    text-align: center;
                    cursor: pointer;
                    color: #1C1C1C;
                }

                a:hover {
                    color: #0489B1;
                }

            `}
            </style>
            <h3> About </h3>
            <div> 
                <p> 
                    Eu me chamo Joan de Azevedo Medeiros, tenho 21 anos, sou estudante 
                    de Sistemas da Informação. Atualmente estou no 4º período e pretendo 
                    futuramente trabalhar como desenvolvedor Full-Stack.
                </p>

            </div>
            <Link href='/'><a>Voltar ao Home</a></Link>
            
        </div>
    )
}