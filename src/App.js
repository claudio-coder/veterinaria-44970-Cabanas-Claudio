import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import BodyApp from './components/BodyApp/BodyApp';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Gatos from './components/Gatos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perros from './components/Perros';

export default function App() {
  return (
    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/perros" element={<Perros/>} />
        <Route path="/gatos" element={<Gatos/>} />
        {/* <Route /> */}
        {/* <Route /> */}
        {/* <Route /> */}
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      <Footer />
    </BrowserRouter>
  );
}
