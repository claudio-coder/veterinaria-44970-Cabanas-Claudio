import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../CartContext";
import Box from "@mui/material/Box";

export default function CartWidget() {
  const { totalProducts } = useCartContext();
  return (
    <>
      <div>
        <ShoppingCartIcon sx={{ color: "white", textDecoration: "none" }} />
      </div>
      <Box sx={{ color: "white", borderRadius: "50%", textDecoration: "none" }}>
        <span sx={{ color: "white", borderRadius: "50%", textDecoration: "none" }}>{totalProducts() || ""}</span>
      </Box>
    </>
  );
}
