import styled from "styled-components";

const Error = styled.div`
    background-color: #01A9DB;
    padding: 10px;
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    max-width: 300px;
`

export default function MessageWarning({texto}) {
    return (
        <Error>{texto}</Error>
    )
}