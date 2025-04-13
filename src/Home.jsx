import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Product(props) {
  const cartArray = [];
  function handleAddToCart(product) {
    cartArray.push(product)
  }
  return (
    <div>
      <h3>{props.category[0].category}</h3>
      <div className={styles.productContainer}>
        {props.category.map((product) => (
          <div key={product.id} className={styles.product}>
            <img
              src={product.image}
              alt={product.title}
              width="220"
              height="250"
            />
            <h4>{product.title}</h4>
            <h4>${product.price}</h4>
            <button onClick={() => {handleAddToCart(product)}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const jewelery = products.filter((product) => {
    return product.category === "jewelery";
  });

  const electronics = products.filter((product) => {
    return product.category === "electronics";
  });

  const menswear = products.filter((product) => {
    return product.category === "men's clothing";
  });

  const womenswear = products.filter((product) => {
    return product.category === "women's clothing";
  });
  //console.log(womenswear);
  // console.log(menswear);
  // console.log(electronics);
  // console.log(jewelery);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No products found</div>; // Check array length instead

  return (
    <div>
      <h2>Featured Products</h2>
      <Product category={menswear} />
      <hr />
      <Product category={womenswear} />
      <hr />
      <Product category={jewelery} />
      <hr />
      <Product category={electronics} />
      <hr />
    </div>
  );
}

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <h1>Style Meets Comfort at Gen-z Store</h1>
        <p>
          Discover trendy apparel for every occasion. Quality guaranteed,
          comfort assured.
        </p>
        <div className={styles.heroButtons}>
          <Link to="shop"><button>Shop Now</button></Link>
          <button>Featured Items</button>
        </div>
        
      </div>
      <div>
        <img src="src/assets/image.png" alt="stylish image" width="500"/>
      </div>
    </div>
  );
}
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductContainer />
    </div>
  );
};
export default Home;
