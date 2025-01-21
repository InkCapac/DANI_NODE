/*
import Slider from "./componentes/Slider"
import Sections from "./componentes/Sections"
*/
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./linkedPages/inicio";
import Navtab from "./componentes/navTab";
import Slider from "./componentes/Slider";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navtab /> {/* La barra de navegación siempre estará visible */}
      <Slider/>
      <Routes>
      <Route path="/" element={<Inicio />} /> {/* Ruta para la página de Inicio */}
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
