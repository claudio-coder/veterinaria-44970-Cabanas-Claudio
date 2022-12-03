import React from "react";
import { useState } from "react";
import { useCartContext } from "../CartContext";
import { addDoc, doc, updateDoc, getFirestore, collection } from "firebase/firestore";
import { increment } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, totalPrice } = useCartContext();
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const { clearCart } = useCartContext();

  // const [isNoOk, setNoOk] = useState(true);

  function handleClickBuyButton() {
    // setNoOk(true);

    // if (nombre === nombreValido) {
    //   setNombre("Error Solo Letras");
    //   setNoOk(false);
    //   return;
    // }
    // if (tel !== "manuel") {
    //   setTel("Error Solo Numeros");
    //   setNoOk(false);
    //   return;
    // }
    // if (email !== "cabanas") {
    //   setEmail("Error Solo Numeros");
    //   setNoOk(false);
    //   return;
    // }

    // if (!isNoOk) {
    //   return;
    // } else {
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

    const db = getFirestore();
    const orders = collection(db, "orders");

    if (!nombre || !email || !tel) {
      return;
    }
    addDoc(orders, order).then((orderInsert) => {
      cart.forEach((item) => {
        const documento = doc(db, "products", item.id);
        updateDoc(documento, { stock: increment(-item.quantity) });
      });

      navigate("../finishbuy", {
        state: { orderId: orderInsert.id },
      });

      clearCart();
    });
    // }
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
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <input
              className="target_info"
              placeholder="Telefono"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div>
            <input
              className="target_info"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input type="button" onClick={handleClickBuyButton} className="buy_confirm" value="COMPRAR" />
          </div>
        </div>
        <div>
          <h1>TOTAL A PAGAR:${totalPrice()}</h1>
        </div>
      </div>
    </div>
  );
}
