import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
import { data } from './data';
const App = () => {
  const nombre = "";
  const apellido = "";
  const apellido2 = "";
  const edad = "";
  const correo = "";
  const pass = "";

  const usuario = {
    nombre ,
    apellido ,
    apellido2 ,
    edad ,
    correo ,
    pass:
  }
  const enviar = (event: any) => {
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
