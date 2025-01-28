import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navtab from "./componentes/navTab";
import Index from "./index";
import Formulario from "./componentes/Formulario";
import Contacto from "./linkedPages/contacto";

const App: React.FC = () => {
  return (
    <section>
      {/* Barra de navegación */}
      <BrowserRouter>
        <Navtab /> {/* Incluye la barra de navegación en todas las páginas */}
        <Routes>
          {/* Rutas de las páginas */}
          <Route path="/" element={<Index />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
