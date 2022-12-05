import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../CartContext";
import "./FinishBuy.css";

export default function FinishBuy() {
  const { clearCart } = useCartContext();
  const location = useLocation();
  const { orderId } = location.state;

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <div
        className="cuerpo_buy"
        style={{
          backgroundColor: "rgb(250, 235, 215)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h1 className="finish_buy">Gracias por su compra </h1>
        </div>
        <div>
          <h1 className="finish_buy">Su Numero de pedido es : </h1>
          <h1 className="finish_buy" style={{ color: "blue" }}>
            {orderId}{" "}
          </h1>
        </div>
        <Link to="../">
          <button className="buy">SEGUIR COMPRANDO</button>
        </Link>
      </div>
    </>
  );
}
