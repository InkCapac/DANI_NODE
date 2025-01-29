import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navtab from "./componentes/navTab";
import Index from "./index";
import Contacto from "./linkedPages/contacto";
import QueHacemos from "./linkedPages/queHacemos";
import Defenred from "./linkedPages/defenred";
import Defensoras from "./linkedPages/defensoras";

const App: React.FC = () => {
  return (
    <section>
      {/* Barra de navegación */}
      <BrowserRouter>
        <Navtab /> {/* Incluye la barra de navegación en todas las páginas */}
        <Routes>
          {/* Rutas de las páginas */}
          <Route path="/" element={<Index />} />
          <Route path="/Defenred" element={<Defenred />} />
          {/* Nested routes for Defenred */}
          <Route path="/porqueProyecto" element={<PorqueProyecto />} />
            <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/queHacemos" element={<QueHacemos />} />
          <Route path="/Defensoras" element={<Defensoras />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
