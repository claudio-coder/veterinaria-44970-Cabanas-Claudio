import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetails from "./ItemDetails/ItemDetails";

export default function ItemDetailsContainer() {
  const { iditem } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, "products", iditem);

    getDoc(product).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, [iditem]);

  return (
    <div>
      <ItemDetails product={product} />
    </div>
  );
}
