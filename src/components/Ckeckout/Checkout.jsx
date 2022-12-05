import React from "react";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useCartContext } from "../CartContext";
import { addDoc, doc, updateDoc, getFirestore, collection } from "firebase/firestore";
import { increment } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { isValidEmail, isValidPhoneNumber, isValidName } from "../../utils";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, totalPrice } = useCartContext();
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleClickBuyButton() {
    if (!nombre || !email || !tel) {
      return;
    }

    if (!isValidEmail(email) || !isValidPhoneNumber(tel) || isValidName(nombre)) {
      setError("Hay un error en los inputs");
      return;
    }

    setError(false);

    const order = {
      buyer: { nombre, tel, email },
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };

    setIsLoading(true);
    const db = getFirestore();
    const orders = collection(db, "orders");

    addDoc(orders, order).then((orderInsert) => {
      cart.forEach((item) => {
        const documento = doc(db, "products", item.id);
        updateDoc(documento, { stock: increment(-item.quantity) });
      });

      navigate("../finishbuy", {
        state: { orderId: orderInsert.id },
      });
    });
  }

  if (cart.length === 0) {
    return (
      <>
        <div
          className="cuerpo_check"
          style={{
            backgroundColor: "rgb(250, 235, 215)",
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
    <div>
      <div
        style={{
          backgroundColor: "rgb(250, 235, 215)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div className="data_entry">
          <div>
            <input
              className="target_info"
              placeholder="Nombre"
              value={nombre}
              disabled={isLoading}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <input
              className="target_info"
              placeholder="Telefono"
              value={tel}
              disabled={isLoading}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div>
            <input
              className="target_info"
              placeholder="Email"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              disabled={isLoading}
              onClick={handleClickBuyButton}
              className="buy_confirm"
              value="COMPRAR"
            />
          </div>
          {error}
        </div>
        {isLoading && (
          <div>
            <CircularProgress />
          </div>
        )}
        <div>
          <h1>TOTAL A PAGAR:${totalPrice()}</h1>
        </div>
      </div>
    </div>
  );
}
