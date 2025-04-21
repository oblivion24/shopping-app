import { createContext, useState, useEffect } from "react";

// 1. Create the context object
const CartContext = createContext();

// 2. Create the provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
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
        setAllProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function addToCart(product) {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  function deleteFromCart(product) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  }

  function clearAllCartItems() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        deleteFromCart,
        clearAllCartItems,
        allProducts,
        setAllProducts,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
