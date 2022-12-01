import React from "react";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetails.css";
import { useCartContext } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetails({ product }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (count) => {
    setGoToCart(true);
    addProduct(product, count);
  };

  return (
    <div>
      <div className="target_product">
        <div className="img_product">
          <img src={product?.path} alt="" width={250} className="mascota_img" />
        </div>
        <div className="product_datos">
          <div className="target_datos">
            <div className="target_description">
              <div className="target_name">
                <h1>{product?.name}</h1>
              </div>
              <div className="target_name">
                <h1 style={{ fontWeight: 500 }}> ${product?.price}</h1>
              </div>
            </div>
            <div className="contador">
              {goToCart ? (
                <Link to="/cart">
                  <div className="centrar">
                    <button className="buy-finish">Ir al Carrito</button>
                  </div>
                </Link>
              ) : (
                <div className="contador_img">
                  <ItemCount initial={0} stock={product?.stock} onAdd={onAdd} />
                </div>
              )}
            </div>
          </div>
          <div className="information">
            <h2 className="description">Descripción: {product?.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
