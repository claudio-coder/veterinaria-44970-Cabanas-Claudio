import Reactç from "react";
// import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetails.css";
import { useCartContext } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetails({ product }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (count) => {
    setGoToCart(true);
    addProduct(product, count);
  };

  console.log(product?.path);

  return (
    <div>
      <div className="target_product">
        <div>
          <img src={product?.path} alt="" width={500} className="mascota_img" />
        </div>
        <div className="product_datos">
          <div className="target_datos">
            <div className="target_description">
              <div>
                <h1>{product?.name}</h1>
              </div>
              <div>
                <h1>{product?.price}</h1>
              </div>
              <div>
                <h2> Stock {product?.stock} disponibles</h2>
              </div>
            </div>
            <div className="contador">
              {goToCart ? (
                <Link to="/cart"> Terminar Compra</Link>
              ) : (
                <ItemCount initial={1} stock={product?.stock} onAdd={onAdd} />
              )}
            </div>
          </div>
          <div>
            <h2 className="description">Descripción: {product?.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
