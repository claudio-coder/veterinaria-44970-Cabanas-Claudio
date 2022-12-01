import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const PRODUCTS_BY_CATEGORY = {
  perros: [],
  gatos: [],
  peces: [],
  aves: [],
  conejos: [],
  exoticos: [],
};

export default function ItemListContainer() {
  const { idraza } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    setIsLoading(true);
    if (idraza) {
      const queryFilter = query(queryCollection, where("category", "==", idraza));
      getDocs(queryFilter).then((res) => {
        const products = res.docs.map((product) => ({ id: product.id, ...product.data() }));

        products.forEach((aProduct) => {
          PRODUCTS_BY_CATEGORY[aProduct.category].push(aProduct);
        });

        setIsLoading(false);
      });
    } else {
      getDocs(queryCollection).then((res) => {
        const products = res.docs.map((product) => ({ id: product.id, ...product.data() }));

        products.forEach((aProduct) => {
          PRODUCTS_BY_CATEGORY[aProduct.category].push(aProduct);
        });

        setIsLoading(false);
      });
    }
  }, [idraza]);

  return (
    <>
      <div className="cuerpo">
        {isLoading ? <CircularProgress /> : <ItemList productsByCategory={PRODUCTS_BY_CATEGORY} />}
      </div>
    </>
  );
}
