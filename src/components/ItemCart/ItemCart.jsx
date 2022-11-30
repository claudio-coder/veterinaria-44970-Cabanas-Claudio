import React from "react";
import { useCartContext } from "../CartContext";
import "./ItemCart.css";

export default function ItemCart({ product }) {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.path} alt={product.name} className="img_item"/>
      <div>
        <p> Titulo: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio unit:$ {product.price}</p>
        <p>Subtotal: $ {product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>ELIMINAR</button>
      </div>
    </div>
  );
}
