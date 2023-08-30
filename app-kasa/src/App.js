import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erreur404 from "./pages/Erreur404";
import APropos from "./pages/APropos";
import './styles/components/naviguation.css';
import Footer from "./components/Footer";
import FicheLogement from "./pages/FicheLogement";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        {/*path='*'fonctionne si url ne correspondt a aucun chemin déclaré*/}
        <Route path='*' element={<Erreur404 />} />
        <Route path="/property/:id" element={<FicheLogement />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    
  );
};

export default App;

//creer un router//
