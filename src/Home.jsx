import { useState } from "react";
import { useContext } from "react";
import CartContext from "./context/CartContext";
import Cart from "./Cart";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import navStyle from "./Navbar.module.css";
import Hero from "./Hero";

function Product(props) {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      {/* <h3>{props.category[0].category}</h3> */}
      <div className={styles.productContainer}>
        {props.category.map((product) => (
          <div key={product.id} className={styles.product}>
            <img
              className={styles.productImage}
              src={product.image}
              alt={product.title}
            />
            <h4>{product.title}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
              >
              <h4>${product.price}</h4>
              <button className={styles.addToCartButton}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductContainer() {
  const { allProducts, error, loading } = useContext(CartContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (allProducts.length === 0) return <div>No products found</div>; // Check array length 

  return (
    <div className={styles.ProductContainers}>
      <h2 style={{marginLeft:"20px"}}>Featured Products:</h2>
      <div>
        <Product category={allProducts} />
      </div>
    </div>
  );
}

function Home () {

  return(
    <div>
      <div className={styles.heroSection}><Hero /></div>
      <ProductContainer />
    </div>
  )
}

function Navigation() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => setIsCartOpen(false);
  function toggleCart() {
    //alert("cart icon clicked");
    setIsCartOpen((prev) => !prev);
  }
  return (
    <div>
      <div className={navStyle.stickyNavbar}>
        <Navbar handleCart={toggleCart} />
      </div>
      <div
        style={{
          transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
        }}
        className={styles.cartSidebar}
      >
        <Cart onClose={closeCart} />
      </div>
    </div>
  );
}
export default Home;
export {Product, Navigation}
