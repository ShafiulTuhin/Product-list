import { useState } from "react";
import { CartContext } from "../context";
import { useProduct } from "../hooks";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
