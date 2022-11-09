import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import "./ItemDetailsContainer.css";

// export default function ItemDetailsContainer({ productId, open, handleClose, onAdd, bicho }) {
export default function ItemDetailsContainer() {
  const { iditem } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const item = data.find((anItem) => anItem.id.toString() === iditem);
        setProduct(item);
      });
  }, []);

  return (
    <div>
      {/* <h1>{product?.name}</h1> */}
      {/* <ItemDetails product={product} open={open} handleClose={handleClose} onAdd={onAdd} /> */}
      <ItemDetails product={product} />
    </div>
  );
}
