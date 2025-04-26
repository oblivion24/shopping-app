import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";



const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <h1>Style Meets Comfort at Gen-z Store</h1>
        <p>
          Discover trendy apparel for every occasion. Quality guaranteed,
          comfort assured.
        </p>
        <div className={styles.heroButtons}>
          <Link to="shop">
            <button>Shop Now</button>
          </Link>
          <button>Featured Items</button>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};
export default Hero;
