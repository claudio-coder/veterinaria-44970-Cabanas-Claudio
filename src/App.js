import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import BodyApp from './components/BodyApp/BodyApp';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MiCuenta from './components/MiCuenta';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnvioProg from './components/EnvioProg';
import ItemDetailsContainer from "./components/ItemDetailsContainer";

export default function App() {
  return (
    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/raza" element={<ItemListContainer/>}/>
        <Route path="/micuenta" element={<MiCuenta/>} />
        <Route path="/envioprog" element={<EnvioProg/>} />
        <Route path="/raza/:idraza" element={<ItemListContainer/>}/>
        <Route path="/item/:iditem" element={<ItemDetailsContainer/>}/>

        {/* <Route /> */}
        {/* <Route /> */}
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      <Footer />
    </BrowserRouter>
  );
}
