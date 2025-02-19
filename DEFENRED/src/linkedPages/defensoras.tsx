import React from "react";
import Footer from "../componentes/Footer";
import SeccionDefensoras from "./subLinked/sections_defensoras";
import defensorasMain from "../assets/img/defensoras_defenred.webp";
import "./css_pages/defensoras.css";

const Defensoras = () => {
  return (
    <>
      {/* Encabezado */}
      <head>
        <title>Defensoras de Derechos Humanos | Apoyo y Resiliencia con Defenred | Defensoras</title>
        <meta
          name="description"
          content="Descubre cómo Defenred apoya a personas defensoras de los derechos humanos, y la protección de las libertades fundamentales. Conoce sus historias, los desafíos que enfrentan. Infórmate sobre cómo contribuimos a su seguridad y visibilidad internacional."
        />
        <meta
          name="keywords"
          content="La casa de Respiro, Defensores, Defensoras, Derechos"
        />
      </head>

      {/* Sección principal */}
      <section className="defensoras-gallery">
        <div className="defensoras-gallery-container">
          <img
            className="defensoras-gallery-item active"
            src={defensorasMain}
            alt="Defensoras de Derechos Humanos"
          />
          <div className="defensoras-image-text">
            <h1>DEFENSORAS</h1>
            <p>¿De dónde vienen las personas a la casa?</p>
          </div>
        </div>
        <img className="olas-defensoras" src="src/assets/img/descarga.svg" alt="WAVES :)" />
      </section>

      {/* Contenido adicional */}
      <div className="defensoras-content">
      <SeccionDefensoras/>
      </div>
        <Footer />
    </>
  );
};

export default Defensoras;