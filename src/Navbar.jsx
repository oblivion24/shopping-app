import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Cart from "./Cart";
function Button(props) {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}

function ProfileIcon() {
  
  return (
    <div>
        <Link to="profile"><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50px"
        height="60px"
        aria-label="profile"
        data-testid="profile-icon"
        
      >
        <path
          d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,
            14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,
            1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,
            6.47 17.5,2 12,2Z"
        />    
        
      </svg></Link>
      
    </div>
  );
}
function CartIcon(props) {
  
  return (
    <div>
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="cart"
        data-testid="cart-icon"
        onClick={props.handleToggle}
      >
        <path
          d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10
           20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477
            8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523
             21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [value, setValue] = useState("option0");
  function handleSelectedCategory(event) {
    setValue(event.target.value);
  }
  function toggleCart() {
    //alert("cart icon clicked");
    setIsCartOpen(prev => !prev)
  }
  const closeCart = () => setIsCartOpen(false);
  return (
    <div className={styles.navbar}>
      <Link to="/">Gen-z Shop</Link>
      <Link to="/"><Button name="Home" /></Link>
      <Link to="shop"><Button name="Shop" /></Link>
      <select
        className="categories"
        value={value}
        onChange={handleSelectedCategory}
      >
        <option value="option0" disabled>
          Category
        </option>
        <option value="option1">T-Shirts</option>
        <option value="option2">Sneakers</option>
        <option value="option3">Hoodies</option>
        <option value="option3">Eyewear</option>
      </select>
      <input type="search" id="search" name="q" placeholder="Search..."></input>
      <ProfileIcon />
      <CartIcon handleToggle={toggleCart}/>
      {isCartOpen && <Cart onClose={closeCart} />}
    </div>
  );
};
export default Navbar;
