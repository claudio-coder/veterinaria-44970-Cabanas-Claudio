import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const { idraza } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const querydb = getFirestore();
    let queryFilter = collection(querydb, "products");
    setIsLoading(true);

    if (idraza) {
      queryFilter = query(queryFilter, where("category", "==", idraza));
    }

    getDocs(queryFilter).then((res) => {
      const products = res.docs.map((product) => ({ id: product.id, ...product.data() }));

      const productsByCat = {
        perros: [],
        gatos: [],
        peces: [],
        aves: [],
        conejos: [],
        exoticos: [],
      };

      products.forEach((aProduct) => {
        productsByCat[aProduct.category].push(aProduct);
      });

      setProductsByCategory(productsByCat);

      setIsLoading(false);
    });
  }, [idraza]);

  return (
    <>
      <div className="cuerpo">
        {isLoading ? <CircularProgress /> : <ItemList productsByCategory={productsByCategory} />}
      </div>
    </>
  );
}
