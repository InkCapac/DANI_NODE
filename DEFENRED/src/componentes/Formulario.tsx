import React, { useRef } from "react";
import "./css/formulario.css";

const Formulario: React.FC = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const apellido = useRef<HTMLInputElement>(null);
  const apellido2 = useRef<HTMLInputElement>(null);
  const correo = useRef<HTMLInputElement>(null);
  const caridad = useRef<HTMLInputElement>(null);
  const telefono = useRef<HTMLInputElement>(null);
  const observacion = useRef<HTMLTextAreaElement>(null);
  const consentimiento = useRef<HTMLInputElement>(null);

  const enviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Donativo = {
      nombre: nombre.current?.value || "",
      apellido: apellido.current?.value || "",
      apellido2: apellido2.current?.value || "",
      correo: correo.current?.value || "",
      caridad: caridad.current?.value ? parseFloat(caridad.current.value) : null,
      telefono: telefono.current?.value ? telefono.current.value.trim() : "",
      observacion: observacion.current?.value || "",
      consentimiento: consentimiento.current?.checked ? "true" : "false",
    };

    console.log("Datos a enviar:", JSON.stringify(Donativo));

    fetch("http://localhost:8080/enviarDonativo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Donativo),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          console.error("Error en respuesta del servidor:", data);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Monto enviado!:", data);
      })
      .catch((error) => console.error("Error al enviar donativo:", error));
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
        <input id="donativo" type="number" ref={caridad} min="0" step="0.01" required />
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
          Doy mi consentimiento a los términos y condiciones.
        </label>
      </div>

      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default Formulario;
