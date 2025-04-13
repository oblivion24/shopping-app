import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Shop = () => {
    return(
        <div>
            <Navbar />
            <h1>Hello from shop page</h1>
            <Link to="/">Click here to go back</Link>
        </div>
    )
}
export default Shop