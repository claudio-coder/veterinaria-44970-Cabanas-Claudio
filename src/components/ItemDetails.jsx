import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetails.css";

export default function ItemDetails({ product, open, handleClose, onAdd }) {
  return (
    <div>
      <div className="target_product">
        <div>
          <img src={product?.path} alt="" width={500} className="mascota_img" />
        </div>
        <div className="product_datos">
          <div className="target_datos">
            <div className="target_description">
              <div>
                <h1>{product?.name}</h1>
              </div>
              <div>
                <h1>{product?.price}</h1>
              </div>
              <div>
                <h2> STOCK {product?.stock} disponibles</h2>
              </div>
            </div>

            <div className="contador">
              <ItemCount initial={1} stock={product?.stock} onAdd={onAdd} />
            </div>
          </div>
          <div className="description">
            <h2>Descripción: {product?.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
