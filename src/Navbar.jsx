import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import CartContext from "./context/CartContext";
import SearchBar from "./SearchBar";

function Button(props) {
  return (
    <div className={styles.btn}>
      <button>{props.name}</button>
    </div>
  );
}
const LogoIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60px"
        height="60px"
      >
        <path
          d="M4.06,6.15C3.97,6.17 3.88,6.22 3.8,6.28C2.66,7.9 2,9.87 
            2,12A10,10 0 0,0 12,22C15,22 17.68,20.68 19.5,18.6L17,18.85C14.25,
            19.15 11.45,19.19 8.66,18.96C7.95,18.94 7.24,18.76 6.59,18.45C5.73,
            18.06 5.15,17.23 5.07,16.29C5.06,16.13 5.12,16 5.23,15.87L7.42,13.6L15.03,5.7V5.6H10.84C8.57,
            5.64 6.31,5.82 4.06,6.15M20.17,17.5C20.26,17.47 20.35,17.44 20.43,17.39C21.42,
            15.83 22,14 22,12A10,10 0 0,0 12,2C9.22,2 6.7,3.13 4.89,4.97H5.17C8.28,
            4.57 11.43,4.47 14.56,4.65C15.5,4.64 16.45,4.82 17.33,5.17C18.25,
            5.53 18.89,6.38 19,7.37C19,7.53 18.93,7.7 18.82,7.82L9.71,17.19L9,
            17.95V18.06H13.14C15.5,18 17.84,17.81 20.17,17.5Z"
        />
      </svg>
    </div>
  );
};
const HomeButton = () => {
  return (
    <div>
      <Link to="/">
        <Button name="Home" />
      </Link>
    </div>
  );
};
const ShopButton = () => {
  return (
    <div>
      <Link to="/shop">
        <Button name="Shop" />
      </Link>
    </div>
  );
};
const ProfileIcon = () => {
  return (
    <div>
      <Link to="profile">
        <svg
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
        </svg>
      </Link>
    </div>
  );
};
function CartIcon(props) {
  return (
    <div>
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="cart"
        data-testid="cart-icon"
        onClick={props.toggleCart}
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

const Navbar = ({ handleCart }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [value, setValue] = useState("option0");

  function handleSelectedCategory(event) {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    navigate(`/shop/${selectedValue}`);
  }
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className={styles.stickyNavbar}>
      <LogoIcon />
      <div style={{ display: "flex", justifyContent:"space-around", gap:"50px"}}>
        <HomeButton />
        <ShopButton />
      </div>
      <div>
        <select
          className="categories"
          value={value}
          onChange={handleSelectedCategory}
        >
          <option value="option0" disabled>
            Category
          </option>
          <option value="menswear">Mens Wear</option>
          <option value="womenswear">Womens wear</option>
          <option value="electronics">Electornics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>
      <div>
        <SearchBar />
      </div>
      <div style={{display:"flex", justifyContent:"space-between", gap:"50px"}}>
         <div className={styles.profileContainer}>
        <ProfileIcon />
        <div className={styles.dropdownMenu}>
          <ul>
            <li>Sign In</li>
            <li>Account Settings</li>
            <li>Order History</li>
            <li>Help</li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ position: "relative", display: "inlineBlock" }}>
        <CartIcon toggleCart={handleCart} />
        <span className={styles.cartCount}>{totalItems}</span>
      </div>
      </div>
     
    </div>
  );
};

//bottom navbar for mobile interface
const NavbarBottom = () => {
  return (
    <div>
      <HomeButton />
      <ShopButton />
      <ProfileIcon />
      <CartIcon />
    </div>
  );
};
export default Navbar;
