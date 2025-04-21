import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import Shop from "./Shop";
import Profile from "./Profile";
import Category from './Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: '/shop/:category',
    element: <Category />,
  },
  {
    path: "/profile",
    element: <Profile />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
