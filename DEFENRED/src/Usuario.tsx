import { useState } from "react";
import "./linkedPages/subLinked/css_sub/usuarioData.css"; // Asegúrate de crear este archivo CSS para estilos

const Usuario = (props: {
  id: string;
  nombre: string;
  apellido: string;
  apellido2: string;
  birthdate: string;
  correo: string;
  telefono: string;
  consentimiento: boolean;
}) => {
  const { id, nombre, apellido, apellido2, birthdate, correo, telefono } = props;
  {/*Aporte del 'chinese'*/}
  const [contador, cambiarContador] = useState(0);

  const alerta = () => {
    cambiarContador(contador + 1);
    console.log(contador);
  };

  return (
    <article className="usuario-container" onClick={alerta}>
      <h2>{nombre} {apellido}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Apellido:</strong> {apellido}</p>
      <p><strong>Apellido 2:</strong> {apellido2}</p>
      <p><strong>Fecha de nacimiento:</strong> {birthdate}</p>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
      {/*Aporte del 'chinese'*/}
      <span>Clics: {contador}</span>
    </article>
  );
};

export default Usuario;