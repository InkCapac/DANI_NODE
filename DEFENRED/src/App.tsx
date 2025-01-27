//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
//import {data} from 'data';
import {useRef} from 'react';
const App = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const apellido = useRef<HTMLInputElement>(null);
  const apellido2 = useRef<HTMLInputElement>(null);
  const edad = useRef<HTMLInputElement>(null);
  const correo = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);

  const enviar = (event: any) => {
    event?.preventDefault();
    const usuario = {
    nombre: nombre.current?.value,
    apellido: apellido.current?.value,
    apellido2: apellido2.current?.value,
    edad: edad.current?.value,
    correo: correo.current?.value,
    pass: pass.current?.value
    }
    console.log(usuario);
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
        <input type='text' ref={nombre} />
        <label>Apellido</label>
        <input type='text' ref={apellido} />
        <label>Apellido2</label>
        <input type='text' ref={apellido2} />
        <label>Edad</label>
        <input type='number' ref={edad} />
        <label>Correo</label>
        <input type='email' ref={correo} />
        <label>Contraseña</label>
        <input type='password' ref={pass} />
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
