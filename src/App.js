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
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/raza" element={<ItemListContainer/>}/>
        <Route path="/micuenta" element={<MiCuenta/>} />
        <Route path="/envioprog" element={<EnvioProg/>} />
        <Route path="/raza/:idraza" element={<ItemListContainer/>}/>
        <Route path="/item/:iditem" element={<ItemDetailsContainer/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
