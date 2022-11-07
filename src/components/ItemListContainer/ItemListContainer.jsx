import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetailsContainer from "../ItemDetailsContainer";
import "./ItemListContainer.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

export default function ItemListContainer() {
  const { idraza } = useParams();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  // const [selectedProductId, setSelectedProductId] = useState();
  const [arrayProductos, setArrayProductos] = useState([]);
  const [selectRaza, setTipoRaza] = useState([]);

  useEffect(() => {
    setArrayProductos([]);
    setTimeout(() => {
      // fetch(!!idCategory ? `${idCategory}.json` : `/data.json`)
      fetch(`/data.json`)
        .then((response) => response.json())
        .then((data) => {
          // console.log("mi data", data);
          if (!!idraza) {
            setArrayProductos(data.filter((item) => item.raza === idraza));
          } else {
            setArrayProductos(data);
          }
        });
    }, 2000);
  }, [idraza]);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  // const onCardClick = (id, raza) => {
  const onCardClick = (raza) => {
    // setSelectedProductId(id);
    setTipoRaza(raza);

    console.log("aca debe salir");
    // console.log(id);
    console.log(raza);
    setOpen(true);
  };

  console.log("aca esoy ya", arrayProductos);

  return (
    <div>
      <div className="cuerpo">
        {!arrayProductos.length ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2} justifyContent="" alignItems="center">
            {arrayProductos.map((item, idx) => (
              // {productos.map((item) => (
              <Grid item xs={6} key={`item-${idx}`}>
                {/* <Link
                  to={
                    location.pathname === `/category/${item.category}`
                      ? `/category/${item.category}/alimentos-y-acessorios`
                      : `/category/${item.category}`

                  }
uwnefyn3yenf3,s
                > */}
                {/* <div className="mascota" key={item.id} onClick={() => onCardClick(item.id)(item.raza)}> */}
                <div className="mascota" key={item.id} onClick={() => onCardClick(item.raza)}>
                  <img src={item.path} alt="" width={300} className="mascota_img" />
                  <h1>{item.text}</h1>
                </div>
                {/* </Link> */}
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      {open && (
        <ItemDetailsContainer
          // productId={selectedProductId}
          open={open}
          handleClose={() => setOpen(false)}
          onAdd={onAdd}
          bicho={selectRaza}
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
