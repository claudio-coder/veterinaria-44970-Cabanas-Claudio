import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import "./ItemDetailsContainer.css";

export default function ItemDetailsContainer({
  productId,
  open,
  handleClose,
  onAdd,
}) {
  const [product, setProduct] = useState();

  useEffect(() => {
    if (open) {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const product = data.find((aProduct) => aProduct.id === productId);
          setProduct(product);
        });
    }
  }, [open]);

  return (
    <div>
      <ItemDetails
        product={product}
        open={open}
        handleClose={handleClose}
        onAdd={onAdd}
      />
    </div>
  );
}
