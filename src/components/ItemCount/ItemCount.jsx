import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export default function Itemcount({ initial, stock, onAdd }) {
  const [suma, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(suma - 1);
  };
  const increase = () => {
    setCount(suma + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="cart_counter">
      <div className="counter">
        <button disabled={suma <= 0} onClick={decrease} className="buttondec"></button>
        <span className="buttonresult">{suma}</span>
        <button disabled={suma >= stock} onClick={increase} className="buttoninc">
          +
        </button>
      </div>
      <div className="cart">
        <button className="buy" disabled={stock <= 0} onClick={() => onAdd(suma)}>
          Comprar
        </button>
      </div>
    </div>
  );
}
