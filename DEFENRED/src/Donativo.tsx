import { useState } from "react";
import "./linkedPages/subLinked/css_sub/donativoData.css";

const Donativo = (props: {
  id: string;
  nombre: string;
  apellido: string;
  apellido2: string;
  correo: string;
  caridad: string;
  telefono: string;
  observacion: string;
  consentimiento: boolean;
}) => {
  const { id, nombre, apellido, apellido2, correo, caridad, telefono, observacion } = props;

  return (
    <article className="donativo-container">
      <div className="donativo-background">
      <h2>{nombre} {apellido}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Apellido:</strong> {apellido}</p>
      <p><strong>Apellido 2:</strong> {apellido2}</p>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Monto recibido:</strong> {caridad}€</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Comentarios:</strong> {observacion}</p>
      </div>
    </article>
  );
};

export default Donativo;