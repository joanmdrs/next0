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
                Esta aplicação é fruto do desenvolvimento dos exercícios práticos 
                da Receita 1 da disciplina Programação Web. 
            </p>
        </div>
    )
}