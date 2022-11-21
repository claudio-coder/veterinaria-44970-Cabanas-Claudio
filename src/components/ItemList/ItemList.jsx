import React from "react";
import Item from "../Item/Item";

export default function ItemList({ categories = [] }) {
  return categories.map((products) => <Item key={products.id} info={products} />);
}
