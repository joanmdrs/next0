import { RedesSociais } from "./social"

const Contact = () => {
    return (
        <div>
            <h1>Seção Contato</h1>
            <FormContact />
            <h2>Minhas redes sociais</h2>
            <RedesSociais />
            
        </div>
    )
}

export const FormContact = () => {
    return (
        <form>
            <input type='text' placeholder='Seu nome' required></input>
            <input type='email' placeholder='Seu e-mail' required></input>
            <input type='textArea' placeholder='Sua mensagem' required></input>
            <button type='submit'> Enviar </button>
        </form>
    )
}

export default Contact