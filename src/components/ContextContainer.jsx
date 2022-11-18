import React, { createContext } from "react";

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
  const initial = 1;

  /* 
  const [carrito, set carrito] = useState([]);
  
  function addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
function removeItem(itemId) // Remover un item del cart por usando su id
function clear() // Remover todos los items
function isInCart: (id) => true|false 
<contextoGeneral.Provider value={{ addItem, removeItem, clear, isInCart }}>
*/

  return <contextoGeneral.Provider value={{ initial }}>{children}</contextoGeneral.Provider>;
}
