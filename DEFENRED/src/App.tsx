import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import React from "react";
import Navtab from "./componentes/navTab";
import Index from "./index";
import Defenred from "./linkedPages/defenred";
import Contacto from "./linkedPages/contacto";
import QueHacemos from "./linkedPages/queHacemos";
import Defensoras from "./linkedPages/defensoras";
import AltaUsuario from "./linkedPages/subLinked/altaUsuario"; // Asegúrate de tener este componente
import Formulario from "./componentes/Formulario";

import { ParallaxProvider } from "react-scroll-parallax";

const App: React.FC = () => {
  return (
    
      <ParallaxProvider>
    <section>
      {/* Barra de navegación */}
      <BrowserRouter>
        <Navtab /> {/* Incluye la barra de navegación en todas las páginas */}
        <Routes>
          {/* Rutas de las páginas */}
          <Route path="/" element={<Index />} />
          <Route path="/Defenred" element={<Defenred />} />
          {/* Nested routes for Defenred */}
          <Route path="/queHacemos" element={<QueHacemos />} />
          <Route path="/Defensoras" element={<Defensoras />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/altaUsuario" element={<AltaUsuario />} /> {/* Agregando la ruta faltante */}
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </section>
    
      </ParallaxProvider>
  );
};

export default App;