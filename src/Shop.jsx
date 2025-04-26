import { Link } from "react-router-dom";
import { useContext } from "react";
import { Product, Navigation} from "./Home";
import CartContext from "./context/CartContext";
import Footer from "./Footer";
import styles from "./Shop.module.css"

const Shop = () => {
    const {allProducts} = useContext(CartContext);
    //console.log(allProducts);
    return(
        <div>
            <Navigation />
            <div className={styles.content}>
            <h1>Hello! Welcome For Shopping</h1>
             <h2>All Products:</h2>
            </div>
            <Product category={allProducts} />
            <Link to="/">Click here to go back</Link>
            <Footer />
        </div>
    )
}
export default Shop;