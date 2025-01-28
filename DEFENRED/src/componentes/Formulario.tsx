import React, { useRef } from "react";

const Formulario: React.FC = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const apellido = useRef<HTMLInputElement>(null);
  const apellido2 = useRef<HTMLInputElement>(null);
  const edad = useRef<HTMLInputElement>(null);
  const correo = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);

  const enviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuario = {
      nombre: nombre.current?.value,
      apellido: apellido.current?.value,
      apellido2: apellido2.current?.value,
      edad: edad.current?.value,
      correo: correo.current?.value,
      pass: pass.current?.value,
    };

    console.log(usuario);

    fetch("http://localhost:8080/insertarUsuario", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => console.log("Usuario insertado:", data))
      .catch((error) => console.error("Error al insertar usuario:", error));
  };

  return (
    <form onSubmit={enviar}>
      <label htmlFor="nombre">Nombre</label>
      <input id="nombre" type="text" ref={nombre} />

      <label htmlFor="apellido">Apellido</label>
      <input id="apellido" type="text" ref={apellido} />

      <label htmlFor="apellido2">Segundo Apellido</label>
      <input id="apellido2" type="text" ref={apellido2} />

      <label htmlFor="edad">Edad</label>
      <input id="edad" type="number" ref={edad} />

      <label htmlFor="correo">Correo</label>
      <input id="correo" type="email" ref={correo} />

      <label htmlFor="pass">Contraseña</label>
      <input id="pass" type="password" ref={pass} />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;