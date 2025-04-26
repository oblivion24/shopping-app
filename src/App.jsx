// App.jsx

import Home from "./Home";
import {Navigation } from './Home';
import Footer from "./Footer";
const App = () => {

    return(
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <Navigation />
            <Home />
            <Footer />
        </div>
    )
}

export default App;
