import { Link } from "react-router-dom";
import { useContext } from "react";
import { Product, Navigation} from "./Home";
import CartContext from "./context/CartContext";

const Shop = () => {
    const {allProducts} = useContext(CartContext);
    //console.log(allProducts);
    return(
        <div>
            <Navigation />
            <div style={{ paddingTop: "150px" }}>
                <h1>Hello from shop page</h1>
             <h2>All Products:</h2>
            </div>
            <Product category={allProducts} />
            <Link to="/">Click here to go back</Link>
        </div>
    )
}
export default Shop;