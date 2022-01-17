import { Header } from "./header"
import { Principal } from "./main"

function Home () {

    return (
        <div>
            <Header titulo="Minha primeira aplicação com o framework Next.js" />
            <Principal />
        </div>
    )
}

export default Home