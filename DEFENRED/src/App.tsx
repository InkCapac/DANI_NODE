import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
import Formulario from "./componentes/Formulario"; // Importa el componente Formulario

const App: React.FC = () => {
  return (
    <section>
      {/* Navegación de rutas */}
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Index />} />
          
          {/* Ruta de contacto */}
          <Route path="/contacto" element={<h1>Contacta con nosotros</h1>} />
          
          {/* Ruta del formulario */}
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
