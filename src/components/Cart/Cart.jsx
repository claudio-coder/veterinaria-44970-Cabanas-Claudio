import React from "react";
import { useCartContext } from "../CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";

export default function Cart() {
  const { cart, totalPrice } = useCartContext();
  console.log(cart);
  if (cart.length === 0) {
    return (
      <>
        <p>No hay compras en el carrito</p>
        <Link to="../">Hacer Compras</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: {totalPrice()}</p>
    </>
  );
}
