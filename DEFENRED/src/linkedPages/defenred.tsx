import React from "react";
import { Link, Outlet } from "react-router-dom";
/*Debe iniciar con mayúscula el tsx "sempre"*/
import PorqueProyecto from "./subLinked/porqueProyecto";
/*Debe iniciar con mayúscula el tsx "sempre"*/
import QuienesSomos from "./subLinked/quienesSomos";
import Footer from "../componentes/Footer";
import fountainDefenred from "../assets/img/fountain_defenred.webp";
import "./css_pages/defenred.css";
import { useParallax } from "react-scroll-parallax";

const Defenred = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: 50
  });
  return (
    <section className="seccion-defenred-inicio">
      <div className="defenred-gallery">
        <div className="defenred-gallery-container">
          <img className="gallery-item active" src={fountainDefenred} alt="Imagen" />
        </div>
      </div>
      <div className="cta-container" ref={parallax.ref}>
        <button className="cta-porque">¿Por qué elegimos este proyecto?</button>
      </div>
      <QuienesSomos />
      <PorqueProyecto />
      <Footer />
    </section>
  );
};

export default Defenred;