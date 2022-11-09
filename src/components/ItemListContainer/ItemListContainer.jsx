import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css";
import { Link, useParams } from "react-router-dom";

export default function ItemListContainer() {
  const { idraza } = useParams();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([]);

    setTimeout(() => {
      fetch(`/data.json`)
        .then((response) => response.json())
        .then((data) => {
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
              <h2 className="caca3">{aCategory.description}</h2>
              <div className="caca4">
                {aCategory.products.map((aProduct, productIdx) => (
                  <Grid item xs={6} key={`product-${productIdx}`}>
                    <Link to={`/item/${aProduct.id}`} className="target">
                      <div key={aProduct.id} className="caca">
                        <img src={aProduct.path} alt="" width={80} className="mascota_img" />
                        <p> {aProduct.name}</p>
                      </div>
                    </Link>
                  </Grid>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
