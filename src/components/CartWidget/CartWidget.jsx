import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../CartContext";

export default function CartWidget() {
  const { totalProducts } = useCartContext();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <ShoppingCartIcon sx={{ color: "white" }} />
        </div>
        <div style={{ backgroundColor: "white", borderRadius: "50px" }}>
          <span>{totalProducts() || ""}</span>
        </div>
      </div>
    </>
  );
}
