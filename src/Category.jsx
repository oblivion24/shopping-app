import { useParams, Link } from "react-router-dom";
import CartContext from "./context/CartContext";
import { useContext } from "react";
import { Product, Navigation } from "./Home";
import styles from "./Category.module.css";

const DefaultPage = () => {
    return(
        <div>
            <Link to="/shop" >return to shop page !</Link>
        </div>
    )
}
const MensWear = () => {
    const {allProducts} = useContext(CartContext);
    const menswear = allProducts.filter(product => product.category === "men's clothing")
    //console.log(menswear)
  return(
    <div>
        <h1>Men's Wear Category:</h1>
        <Product category = {menswear} />
        <Link to = "/">go back to home</Link>
    </div>
  ) 
};
const WomensWear = () => {
    const {allProducts} = useContext(CartContext);
    const womenswear = allProducts.filter(product => product.category === "women's clothing")
  return(
    <div>
        <h1>Women's Wear Category:</h1>
        <Product category = {womenswear} />
        <Link to = "/">go back to home</Link>
    </div>
  ) ;
};
const Electornics = () => {
   const {allProducts} = useContext(CartContext);
   const electronics = allProducts.filter(product => product.category === "electronics")
  return(
    <div>
        <h1>Electonics Section:</h1>
        <Product category = {electronics} />
        <Link to = "/">go back to home</Link>
    </div>
  ) ;
};
const Jewelery = () => {
   const {allProducts} = useContext(CartContext);
   const jewelery = allProducts.filter(product => product.category === "jewelery")
  return(
    <div>
        <h1>Jewelery Section:</h1>
        <Product category = {jewelery} />
        <Link to = "/">go back to home</Link>
    </div>
  ) ;
};
const Category = () => {
  const { category } = useParams();

  return (
    <div>
        <Navigation />
      <h1 className={styles.content}>Welcome to the {category} Section</h1>
      <p>Hope, you are enjoying shopping.</p>
      <hr />
      {category === "menswear" ? (
        <MensWear />
      ) : category === "womenswear" ? (
        <WomensWear />
      ) : category === "electronics" ? (
        <Electornics />
      ) : category === "jewelery" ? (
        <Jewelery />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Category;
