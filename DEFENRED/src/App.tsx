import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navtab from "./componentes/navTab";
import Index from "./index";
import Contacto from "./linkedPages/contacto";
import QueHacemos from "./linkedPages/queHacemos";
import Defensoras from "./linkedPages/defensoras";
import { ParallaxProvider } from "react-scroll-parallax";

const App: React.FC = () => {
  return (
    
    <section>
      <ParallaxProvider>
      {/* Barra de navegación */}
      <BrowserRouter>
        <Navtab /> {/* Incluye la barra de navegación en todas las páginas */}
        <Routes>
          {/* Rutas de las páginas */}
          <Route path="/" element={<Index />} />
          {/*<Route path="/Defenred" element={<Defenred />} />*/}
          {/* Nested routes for Defenred */}
          <Route path="/queHacemos" element={<QueHacemos />} />
          <Route path="/Defensoras" element={<Defensoras />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      </ParallaxProvider>
    </section>
    
  );
};

export default App;