import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
const App = () => {
  fetch("http://localhost:8080/insertarUsuario")
  return (
    <diV>
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Apellido</label>
        <input type="text" />
        <label>Apellido2</label>
        <input type="text" />
        <label>Edad</label>
        <input type="number" />
        <label>Correo</label>
        <input type="email" />
        <label>Contraseña</label>
        <input type="password" />
        <button>Enviar</button>
      </form>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />}>
      </Route>
      <Route 
      path="/contacto"
      element={<h1>Contacta con nosotros</h1>}
      >
      </Route>
      </Routes>
      </BrowserRouter>
        </diV>
  );
};

export default App;
