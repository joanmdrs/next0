import Base from "../../../components/base";
import Link from "next/link";

export default function Receita4(){
    return (
        <div>
            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

                nav{
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

        
            <Base title={'Receita 4'} 
            conteudo={'Esta aplicação é fruto do desenvolvimento dos exercícios práticos da Receita 4 da disciplina Programação Web.'}
        
            />
            <nav>
                <Link href='/receitas/receita4/exercicio1/bagdad'><a>Exercício 1</a></Link>
                <Link href='/receitas/receita4/exercicio3/bagdad'><a>Exercício 3</a></Link>
                <Link href='/'><a>Página principal</a></Link>
            </nav>

        </div>
    )
}