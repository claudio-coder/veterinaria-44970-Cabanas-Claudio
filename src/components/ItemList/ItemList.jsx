import React from "react";
import Item from "../Item/Item";

export default function ItemList({ productsByCategory }) {
  const categories = Object.keys(productsByCategory);

  return categories.map((aCategory) => (
    <div>
      <h1>Alimento para {aCategory}</h1>
      {productsByCategory[aCategory]
        .sort(function (a, b) {
          console.log(a);
          const typeA = a.type.toUpperCase();
          const typeB = b.type.toUpperCase();
          return typeA < typeB ? -1 : typeA > typeB ? 1 : 0;
        })
        .map((product) => (
          <Item key={product.id} info={product} />
        ))}
    </div>
  ));
}
