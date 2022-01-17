
require('babel-register')({
    presets: ['env']
});

module.exports = require('./index.js')

import {Header} from "./header"
import Principal from "./principal"
const Home = () => {
    return (
        <div>
            <Header />
            <Principal />
            
        </div>
    )
}


export default Home
