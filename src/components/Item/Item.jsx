import React from "react";
import "./Item.css";

export default function Item({ info }) {
  console.log(info);
  return (
    <>
      <div className="target">
        <a href="" className="target_img">
          <img src={info.path} alt="" width={50} className="mascota_img" />
          <p>{info.name}</p>
        </a>
        {/* //                       <img src={aProduct.path} alt="" width={50} className="mascota_img" /> */}
      </div>
    </>
  );
}
