import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
const App = () => {
  fetch("http://localhost:8080/insertarUsuario")
  return (
    <div>
      <Index/>
      <Route>
      <Routes>
      <Route path="/" element={<Index />}>
      </Route>
      <Route 
      path="/contacto"
      element={<h1>Contacta con nosotros</h1>}
      >
      </Route>
      </Routes>
      </Route>
        </div>
  );
};

export default App;
