import React from "react";
import "./Footer.css";
import logo_nuevo from "./Footer_img/logo_nuevo.jpeg";
import map_marker from "./Footer_img/map_marker.webp";
import fono_blanco from "./Footer_img/fono_blanco.png";
import reloj from "./Footer_img/reloj.jpg";
import sobreblanconegro from "./Footer_img/sobreblanconegro.webp";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="contactanos__titulo ">
          <h3>Contactanos</h3>
        </div>
        <ul>
          <li className="contactanos__datos">
            <img src={map_marker} alt="" width={18} />
            <p>Villa de Lujan 2941, Lanús</p>
          </li>
          <li className="contactanos__datos">
            <img src={fono_blanco} alt="" width={18} />
            <p>011-4225-7785</p>
          </li>
          <li className="contactanos__datos">
            <img src={sobreblanconegro} alt="" width={20} />
            <p>c.m.veterinarialanus@hotmail.com</p>
          </li>
          <li className="contactanos__datos">
            <img src={reloj} alt="" width={50} />
            <p>Atención general:Lunes a Viernes de 10:00 a 18:00 / Sábados de 10:00 a 16:00</p>
          </li>
        </ul>
      </div>
      {/* <Grid container spacing={0} alignItems="center">
        <Grid
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          item
          xs={6}
        > */}

      {/* </Grid> */}

      {/* <Grid className="contactanos_logo" item xs={6}> */}
      <div>
        <img src={logo_nuevo} alt="" width={300} />
      </div>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}
