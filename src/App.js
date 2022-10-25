import './App.css';
import Navbar from './components/Navbar/Navbar';
// import BodyApp from './components/BodyApp/BodyApp';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
   <div>
    <Navbar/>
    {/* <BodyApp/> */}
    <ItemListContainer greeting={"CENTRO MEDICO VETERINARIO"}/>
    <Footer/>
   </div>
  );
}


