import Link from "next/link"

export default function () {
    return (
        <div className="section-contact">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');
                .section-contact {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: center;
                    font-family: 'Lato', 'sans-serif';
                }

                .title {
                    text-align: center;
                    font-style: italic;
                    font-weight: bold;
                    font-size: 25px;
                    padding: 20px;
                    border-bottom: 1px solid #000000;
                    margin-bottom: -5px;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 20px;
                    border-radius: 5px;
                    border: 1px solid #000000;
                }
                input, textarea {
                    width: 200px;
                    padding: 10px;
                    outline: none;
                    border: 1px solid #000000;
                    border-radius: 5px;
                }

                button {
                    padding: 10px;
                    width: 220px;
                    background-image: linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );
                    border-radius: 5px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    color: #FFFFFF;
                }

                a {
                    margin-top: 20px;
                    text-decoration: none;
                    cursor: pointer;
                    color: #1C1C1C;
                }

                a:hover {
                    color: #0489B1;
                }
            
            `
            }
            </style>
            <h3 className="title"> Contact </h3>
            <h3>Me envie uma mensagem !</h3>
            <form>
                <input type='text' placeholder='Aqui vai seu nome'></input>
                <input type='email' placeholder='Aqui seu e-mail'></input>
                <textarea type='text' placeholder="E aqui sua mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
            
            <Link href='/'><a>Voltar ao Home</a></Link>
        </div>
    )
}