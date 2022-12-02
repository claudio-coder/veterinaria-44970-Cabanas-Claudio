import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ productsByCategory }) {
  const categories = Object.keys(productsByCategory);

  return categories
    .filter((aCategory) => !!productsByCategory[aCategory].length)
    .map((aCategory) => (
      <div className="cuerpo_itemlist">
        <div >
          <h2 className="target_title" >Alimento y Accesorios para {aCategory}</h2>
        </div>
        <div className="target_item">
          {productsByCategory[aCategory]
            .sort(function (a, b) {
              const typeA = a.type.toUpperCase();
              const typeB = b.type.toUpperCase();
              return typeA < typeB ? -1 : typeA > typeB ? 1 : 0;
            })
            .map((product) => (
              <Item key={product.id} info={product} />
            ))}
        </div>
      </div>
    ));
}
