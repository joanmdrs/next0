export default function Base({title, conteudo}) {
    return (
        <div>
            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

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
            <Header title={title} />
            <div className="paragrafh">
                <p> 
                {conteudo}
                </p>
            </div>
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

