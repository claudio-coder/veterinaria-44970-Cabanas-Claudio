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
        <div
          style={{
            backgroundColor: "rgb(250, 235, 215)",
            height: 400,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h2>No hay compras en el carrito</h2>
          <Link to="../">
            <button className="buy">Hacer Compras</button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total:${totalPrice()}</p>
      <Link to="../checkout">
        <button className="buy">Finalizar Compra</button>
      </Link>
    </>
  );
}
