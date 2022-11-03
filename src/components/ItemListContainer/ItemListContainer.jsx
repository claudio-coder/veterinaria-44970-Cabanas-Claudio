import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetailsContainer from "../ItemDetailsContainer";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState();
  const [arrayProductos, setArrayProductos] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setArrayProductos(data);
      })
      .catch((e) => {
        console.log("ERROR");
      })
      .finally(() => {
        console.log("PASO");
      });
  }, []);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  const onCardClick = (id) => {
    setSelectedProductId(id);
    setOpen(true);
  };

  return (
    <div>
      <div className="cuerpo">
        {arrayProductos.map((item) => (
          <div
            className="mascota"
            key={item.id}
            onClick={() => onCardClick(item.id)}
          >
            <img src={item.path} alt="" width={300} className="mascota_img" />
            <h1>{item.text}</h1>
          </div>
        ))}
      </div>
      {open && (
        <ItemDetailsContainer
          productId={selectedProductId}
          open={open}
          handleClose={() => setOpen(false)}
          onAdd={onAdd}
        />
      )}
    </div>

    // <div>
    //   <div className="cuerpo">
    //     {arrayProductos.map((item) => (
    //       <div
    //         className="target"
    //         key={item.id}
    //         onClick={() => onCardClick(item.id)}
    //       >
    //         <img src={item.path} alt="" width={250} />
    //       </div>
    //     ))}
    //   </div>
    //   {open && (
    //     <ItemDetailsContainer
    //       productId={selectedProductId}
    //       open={open}
    //       handleClose={() => setOpen(false)}
    //       onAdd={onAdd}
    //     />
    //   )}
    // </div>
  );
}
