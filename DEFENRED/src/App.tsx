import Slider from "./componentes/Slider"
import Sections from "./componentes/Sections"
import Inicio from "./linkedPages/inicio"
import './App.css'


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navtab from "./componentes/Navtab"; // Ruta a tu componente de navegación

const App = () => {
  return (
    <BrowserRouter>
      <Navtab /> {/* La barra de navegación siempre estará visible */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


export default App
