import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ItemCount from "./ItemCount/ItemCount";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  fontWeight: "bold",
};

export default function ItemDetails({ product, open, handleClose, onAdd }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={product?.path} alt="" width={200} />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product?.text}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product?.price}
          </Typography>
          <ItemCount initial={1} stock={product?.stock} onAdd={onAdd} />
        </Box>
      </Modal>
    </div>
  );
}
