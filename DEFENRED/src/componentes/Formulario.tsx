import React, { useRef } from "react";
import "./css/formulario.css";

const Formulario: React.FC = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const apellido = useRef<HTMLInputElement>(null);
  const apellido2 = useRef<HTMLInputElement>(null);
  const correo = useRef<HTMLInputElement>(null);
  const donativo = useRef<HTMLInputElement>(null);
  const telefono = useRef<HTMLInputElement>(null);
  const observacion = useRef<HTMLTextAreaElement>(null);
  const consentimiento = useRef<HTMLInputElement>(null);

  const enviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuario = {
      nombre: nombre.current?.value,
      apellido: apellido.current?.value,
      apellido2: apellido2.current?.value,
      correo: correo.current?.value,
      donativo: donativo.current?.value,
      telefono: telefono.current?.value,
      observacion: observacion.current?.value,
      consentimiento: consentimiento.current?.checked, // Use .checked for checkboxes
    };

    console.log(usuario);

    fetch("http://localhost:8080/insertarUsuario", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("Usuario insertado:", data))
      .catch((error) => console.error("Error al insertar usuario:", error));
  };

  return (
    <form onSubmit={enviar} className="form-container">
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" ref={nombre} required />
      </div>

      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input id="apellido" type="text" ref={apellido} required />
      </div>

      <div className="form-group">
        <label htmlFor="apellido2">Segundo Apellido</label>
        <input id="apellido2" type="text" ref={apellido2} />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" ref={correo} required />
      </div>

      <div className="form-group">
        <label htmlFor="donativo">Cantidad a donar</label>
        <input id="donativo" type="number" ref={donativo} min="0" step="0.01" required />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Número de teléfono</label>
        <input id="telefono" type="tel" ref={telefono} pattern="[0-9]{10}" required />
      </div>

      <div className="form-group">
        <label htmlFor="observacion">Observación</label>
        <textarea id="observacion" ref={observacion}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="consentimiento">
          <input id="consentimiento" type="checkbox" ref={consentimiento} required />
          I consent to the terms and conditions
        </label>
      </div>

      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default Formulario;