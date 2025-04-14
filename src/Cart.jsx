import { useContext } from "react";
import  CartContext from "./context/CartContext";
const Cart = ({ onClose }) => {
  const { cartItems, clearAllCartItems, deleteFromCart } = useContext(CartContext);

  return (
    <div>
      <button id="myButton" onClick={onClose}>
        X{" "}
      </button>
      <h3>Hello from cart section</h3>
      <h2>Your Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          {/* <p>{item.name}</p> */}
          <p>{item.price}</p>
          <button onClick={() => deleteFromCart(item)}>Remove</button>
        </div>
      ))}
      {cartItems.length && (<button onClick={() => clearAllCartItems()}>Clear Cart</button>)}
      <hr />
      <h4>Subtotal</h4>
      <h4>Tax</h4>
      <h3>Total</h3>
      <button>Go To Checkout</button>
    </div>
  );
};
export default Cart;
