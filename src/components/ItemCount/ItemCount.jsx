import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export default function Itemcount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="cart_counter">
      <div className="counter">
        <button disabled={count <= 1} onClick={decrease} className="buttondec">
          -
        </button>
        <span className="buttonresult">{count}</span>
        <button disabled={count >= stock} onClick={increase} className="buttoninc">
          +
        </button>
      </div>
      <div className="cart">
        <button className="buy" disabled={stock <= 0} onClick={() => onAdd(count)}>
          Subir al Carrito
        </button>
      </div>
    </div>
  );
}
