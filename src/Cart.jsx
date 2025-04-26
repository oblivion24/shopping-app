import { useContext, useMemo } from "react";
import CartContext from "./context/CartContext";
import styles from "./Cart.module.css";

const Header = ({ closeCart }) => {
  return (
    <>
      <div className={styles.header}>
        <h2>Your Cart</h2>
        <button id="myButton" onClick={closeCart}>
          <h2>&times;</h2>
        </button>
      </div>
      <hr />
    </>
  );
};

const Footer = ({ subTotal }) => {
  const { cartItems, clearAllCartItems } = useContext(CartContext);
  const tax = (5 / 100) * subTotal;
  const total = subTotal + tax;
  return (
    <div style={{padding:"20px"}}>
      {cartItems.length && (
        <button onClick={() => clearAllCartItems()}>Clear Cart</button>
      )}
      <h4>Subtotal = {subTotal}</h4>
      <h4>Tax (5%) = {tax}</h4>
      <h3>Total = {total}</h3>
      <button>Go To Checkout</button>
    </div>
  );
};

const Content = () => {
  const { cartItems, setCartItems, deleteFromCart } = useContext(CartContext);

  function increaseQuantity(productId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  function decreaseQuantity(productId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartItems}>
          {/* <p>{item.name}</p> */}
          <img src={item.image} alt={item.title} width="150" height="200"/>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                 maxWidth: "200px" 
              }}
            >
              {item.title}
            </p>
            <p>
              ${item.price} * {item.quantity}
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>

          <svg
            style={{ minWidth: "24px", minheight: "24px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-trash"
            onClick={() => deleteFromCart(item)}
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
        </div>
      ))}
    </div>
  );
};

const Cart = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);
  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);
  
  return (
    <>
      <div className={styles.cartBox}>
        <Header closeCart={onClose} />
        <div style={{ flex: 1, overflowY: "auto" }}>{<Content />}</div>
        <Footer subTotal={total} />
      </div>
    </>
  );
};
export default Cart;
