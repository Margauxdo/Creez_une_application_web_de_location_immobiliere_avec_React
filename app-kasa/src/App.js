import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import Erreur404 from "./pages/Erreur404";
import APropos from "./pages/APropos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement" element={<FicheLogement />} />
        <Route path="/Erreur404" element={<Erreur404 />} />
        <Route path="/APropos" element={<APropos />} />

      </Routes>
    </BrowserRouter>
    
  );
};

export default App;

//creer un router//
