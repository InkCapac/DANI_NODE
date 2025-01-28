import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./index";

const App: React.FC = () => {
  return (
    <section>
      {/* Menú de navegación */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/formulario">Formulario</Link></li>
        </ul>
      </nav>

      {/* Navegación de rutas */}
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Index />} />
          
          {/* Ruta de contacto */}
          <Route path="/contacto" element={<h1>Contacta con nosotros</h1>} />
          
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
