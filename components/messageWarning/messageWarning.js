export default function MessageWarning({texto}){
    return (
        <div>
            <style jsx>{`
                div {
                    background-color: #01A9DB;
                    padding: 10px;
                    color: #fff;
                    text-align: center;
                    font-size: 15px;
                    font-family: 'Lato', sans-serif;
                    max-width: 300px;
                }
            `}</style>

            {texto}
        </div>

    )
}