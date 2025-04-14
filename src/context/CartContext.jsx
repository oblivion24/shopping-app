import { createContext, useState } from "react";

// 1. Create the context object
const CartContext = createContext();

// 2. Create the provider component
export function CartProvider({ children }) {
  const [ cartItems, setCartItems ] = useState([]);
  function addToCart(item) {
    setCartItems(prevItems => [...prevItems, item]);
  }
  function deleteFromCart(product) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
  }
  function clearAllCartItems() {
    setCartItems([]);
  }
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, deleteFromCart, clearAllCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;