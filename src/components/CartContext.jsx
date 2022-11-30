import React, { useState, useContext, useEffect } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === product.id ? { ...prod, quantity: prod.quantity + quantity } : prod;
        })
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => cart.reduce((acumulador, productActual) => acumulador + productActual.quantity, 0);

  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((product) => product.id === id) ? true : false);

  const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
