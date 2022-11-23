import React, { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

// export default function ItemDetails({ product }) {

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //   const addProduct = (product, newQuantity) => {
  //     const newCart = cart.filter((prod) => prod.id !== product.id);
  //     newCart.push({ ...product, quantity: newQuantity });
  //     setCart(newCart);
  //   };

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

  console.log("carrito:", cart);

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => cart.reduce((acumulador, productActual) => acumulador + productActual.quantity, 0);

  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((product) => product.id === id) ? true : false);

  const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id));

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

/* 
  const [carrito, set carrito] = useState([]);
  
  function addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
function removeItem(itemId) // Remover un item del cart por usando su id
function clear() // Remover todos los items
function isInCart: (id) => true|false 
<contextoGeneral.Provider value={{ addItem, removeItem, clear, isInCart }}>
*/
