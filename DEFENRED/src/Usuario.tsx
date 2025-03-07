import { useState } from "react";
import "./linkedPages/subLinked/css_sub/usuarioData.css";

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

  return (
    <article className="usuario-container">
      <div className="usuario-background">
      <h2>{nombre} {apellido}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Apellido:</strong> {apellido}</p>
      <p><strong>Apellido 2:</strong> {apellido2}</p>
      <p><strong>Fecha de nacimiento:</strong> {birthdate}</p>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
      </div>
    </article>
  );
};

export default Usuario;