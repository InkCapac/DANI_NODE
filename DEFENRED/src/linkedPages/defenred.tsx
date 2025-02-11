import React from "react";
import { Link, Outlet } from "react-router-dom";
import PorqueProyecto from "../linkedPages/subLinked/porqueProyecto";
import Footer from "../componentes/Footer";
import fountainDefenred from "../assets/img/fountain_defenred.jpg";
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
      <nav>
        <ul>
          <li>
            <Link to="PorqueProyecto">Porque este proyecto</Link>
          </li>
          <li>
            <Link to="quienes-somos">Quienes somos</Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </section>
  );
};

export default Defenred;