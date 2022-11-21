import React, { useEffect, useState } from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailsContainer() {
  const { iditem } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, "products", "6rzLfa9QW1WT0jzrDaFP");

    getDoc(product).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, []);

  // useEffect(() => {
  //   fetch("/products.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const item = data.find((anItem) => anItem.id.toString() === iditem);
  //       setProduct(item);
  //     });
  // }, []);

  return (
    <div>
      <ItemDetails product={product} />
    </div>
  );
}
