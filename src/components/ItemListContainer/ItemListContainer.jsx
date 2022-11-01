import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";
import oldprince from "./ItemListContainer_img/oldprince.webp";
import royalcaninadult from "./ItemListContainer_img/royalcaninadult.jpeg";
import vitalcan from "./ItemListContainer_img/vitalcan.webp";

export default function ItemListContainer() {
  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log("cagamos");
      })
      .finally(() => {
        console.log("ya termino");
      });
  }, []);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };
  return (
    <div className="cuerpo">
      <div className="target">
        <div>
          <img src={oldprince} alt="" width={250} />
        </div>
        <div>
          <p
            className="nomargin"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Alimento Old Prince Novel Cordero y Arroz Perro Adulto Mediano y
            Grande - 15 Kg
          </p>
        </div>
        <div>
          <h2
            className="nomargin"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            $ 8906,00
          </h2>
        </div>
        <div>
          <ItemCount initial={1} stock={3} onAdd={onAdd} />
        </div>
      </div>
      <div className="target">
        <div>
          <img src={royalcaninadult} alt="" width={250} />
        </div>
        <div>
          <p
            className="nomargin"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Alimento Royal Canin para Perro Medium Adulto - 15kg
          </p>
        </div>
        <div>
          <h2
            className="nomargin"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            $ 8960,00
          </h2>
        </div>
        <div>
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
      </div>
      <div className="target">
        <div>
          <img src={vitalcan} alt="" width={250} />
        </div>
        <div>
          <p
            className="nomargin"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Alimento Balanced Perro Adulto Raza Mediana - 20+2kg
          </p>
        </div>
        <div>
          <h2
            className="nomargin"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            $ 8875,00
          </h2>
        </div>
        <div>
          <ItemCount initial={1} stock={8} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
}
