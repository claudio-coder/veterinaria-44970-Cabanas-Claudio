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
  const [categories, setCategories] = useState([]);
  const [selectRaza, setTipoRaza] = useState([]);

  useEffect(() => {
    setCategories([]);

    setTimeout(() => {
      // fetch(!!idCategory ? `${idCategory}.json` : `/data.json`)
      fetch(`/data.json`)
        .then((response) => response.json())
        .then((data) => {
          // console.log("mi data", data);
          if (!!idraza) {
            setCategories(data.filter((item) => item.category === idraza));
          } else {
            setCategories(data);
          }
        });
    }, 2000);
  }, [idraza]);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  return (
    <div>
      <div className="cuerpo">
        {!categories.length ? (
          <CircularProgress />
        ) : (
          categories.map((aCategory, idx) => (
            <div key={`category-${idx}`}>
              <h1>{aCategory.description}</h1>
              <Grid container spacing={2} justifyContent="" alignItems="center">
                {aCategory.products.map((aProduct, productIdx) => (
                  <Grid item xs={6} key={`product-${productIdx}`}>
                    <Link to={`/item/${aProduct.id}`}>
                      <div className="mascota" key={aProduct.id}>
                        {/* <img src={item.path} alt="" width={300} className="mascota_img" /> */}
                        <h1>{aProduct.name}</h1>
                      </div>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
