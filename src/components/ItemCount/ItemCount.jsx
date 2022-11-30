import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export default function Itemcount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));
  const [stockcount, setStockcount] = useState(parseInt(stock));

  const decrease = () => {
    setCount(count - 1);
    setStockcount(stockcount + 1);
  };
  const increase = () => {
    setCount(count + 1);
    setStockcount(stockcount - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
    setStockcount(parseInt(stock));
  }, [initial, stock]);

  console.log(count);
  console.log(stockcount);

  return (
    <>
      <div>
        <div className="targetstock">
          <h2 style={{ color: "blue", fontWeight: 500 }}> Stock {stockcount} disponibles</h2>
        </div>

        <div className="cart_counter">
          <div className="counter">
            <button disabled={count <= 0} onClick={decrease} className="buttondec">
              -
            </button>
            <span className="buttonresult">{count}</span>
            <button disabled={count >= stock} onClick={increase} className="buttoninc">
              +
            </button>
          </div>
          <div className="cart">
            <button className="buy" disabled={count <= 0} onClick={() => onAdd(count)}>
              Subir al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
