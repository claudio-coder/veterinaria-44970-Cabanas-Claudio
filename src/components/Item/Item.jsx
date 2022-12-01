import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ info }) {
  return (
    <>
      <div className="target-item">
        <Link to={`/item/${info.id}`} className="target_img-item">
          <img src={info.path} alt="" width={50} className="mascota_img" />
          <p>{info.type}</p>
        </Link>
      </div>
    </>
  );
}
