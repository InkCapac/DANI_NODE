import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
const App = () => {
  const usuario = {
    nombre: "Juanfra",
    apellido: "Quijote",
    apellido2: "Reydama",
    edad: "55",
    correo: "juanfrareydama@vox.es",
    pass: "1234"
  }
  const enviar = (event: Event) => {
    event?.preventDefault();
  fetch("http://localhost:8080/insertarUsuario", 
  {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(usuario),
  }
)
}
  return (
    <section>
      <form onSubmit={enviar}>
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
        </section>
  );
};

export default App;
