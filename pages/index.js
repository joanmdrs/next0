import { Header } from "./header"
import { Principal } from "./principal"

function Home () {

    return (
        <div>
            <Header titulo="Minha primeira aplicação com o framework Next.js" />
            <Principal />

            <p> Testando </p>
        </div>
    )
}

export default Home