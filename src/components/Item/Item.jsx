import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ info }) {
  console.log(info);
  return (
    <>
      <div className="target">
        <Link to={`/item/${info.id}`} className="target_img">
          <img src={info.path} alt="" width={50} className="mascota_img" />
          <p>{info.type}</p>
        </Link>
        {/* //                       <img src={aProduct.path} alt="" width={50} className="mascota_img" /> */}
      </div>
    </>
  );
}
