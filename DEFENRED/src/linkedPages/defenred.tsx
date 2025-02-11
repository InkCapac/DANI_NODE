import React from "react";
import { Link, Outlet } from "react-router-dom";
import PorqueProyecto from "../linkedPages/subLinked/porqueProyecto";
import Footer from "../componentes/Footer";
import fountainDefenred from "../assets/img/fountain_defenred.jpg";
import "./css_pages/defenred.css"

const Defenred = () => {
  return (
    <section className="seccion-defenred-inicio">
      <div className="defenred-gallery">
        <div className="defenred-gallery-container">
          <img className="gallery-item active" src={fountainDefenred} alt="Imagen" />
        </div>
      </div>
      <h2>¿Por qué elegimos este proyecto?</h2>
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