import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const { idraza } = useParams();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    if (idraza) {
      const queryFilter = query(queryCollection, where("category", "==", idraza));
      getDocs(queryFilter).then((res) =>
        setCategories(res.docs.map((product) => ({ id: product.id, ...product.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setCategories(res.docs.map((product) => ({ id: product.id, ...product.data() })))
      );
    }
  }, [idraza]);

  // useEffect(() => {
  //   setCategories([]);

  //   setTimeout(() => {
  //     fetch(`/products.json`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (!!idraza) {
  //           setCategories(data.filter((item) => item.category === idraza));
  //         } else {
  //           setCategories(data);
  //         }
  //       });
  //   }, 2000);
  // }, [idraza]);

  console.log(categories);

  // return (
  //   <div>
  //     <div className="cuerpo">
  //       {!categories.length ? (
  //         <CircularProgress />
  //       ) : (
  //         categories.map((aCategory, idx) => (
  //           <div key={`category-${idx}`}>
  //             <h2 className="category_name">{aCategory.description}</h2>
  //             <div className="target_general">
  //               {aCategory.products.map((aProduct, productIdx) => (
  //                 <Grid item xs={6} key={`product-${productIdx}`}>
  //                   <Link to={`/item/${aProduct.id}`} className="target">
  //                     <div key={aProduct.id} className="target_img">
  //                       <img src={aProduct.path} alt="" width={50} className="mascota_img" />
  //                       <p style={{ margin: "0" }}> {aProduct.name}</p>
  //                     </div>
  //                   </Link>
  //                 </Grid>
  //               ))}
  //             </div>
  //           </div>
  //         ))
  //       )}
  //     </div>
  //   </div>
  // );

  // return (
  //   <div>
  //     <div className="cuerpo">
  //       {!categories.length ? (
  //         <CircularProgress />
  //       ) : (
  //         categories.map((aCategory, idx) => (
  //           <div key={`category-${idx}`}>
  //             <h2 className="category_name">{aCategory.description}</h2>
  //             <div className="target_general">
  //               {aCategory.products.map((aProduct, productIdx) => (
  //                 <Grid item xs={6} key={`product-${productIdx}`}>
  //                   <Link to={`/item/${aProduct.id}`} className="target">
  //                     <div key={aProduct.id} className="target_img">
  //                       <img src={aProduct.path} alt="" width={50} className="mascota_img" />
  //                       <p style={{ margin: "0" }}> {aProduct.name}</p>
  //                     </div>
  //                   </Link>
  //                 </Grid>
  //               ))}
  //             </div>
  //           </div>
  //         ))
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="cuerpo">
        <ItemList categories={categories} />
      </div>
    </>
  );
}
