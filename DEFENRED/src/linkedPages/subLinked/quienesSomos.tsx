import React from "react";
import { Link } from "react-router-dom"; // Import Link and Outlet
import PorqueProyecto from "../linkedPages/subLinked/porqueProyecto"

const quienesSomos = () => {
    return (
        <section>
            <h2>¿QUIÉNES SOMOS?</h2>
            <nav>
        <ul>
          <li>
            <Link to="porqueProyecto">Porque este proyecto</Link>
          </li>
          <li>
            <Link to="quienesSomos">Quienes somos</Link>
          </li>
        </ul>
      </nav>
        </section>
    );
};

export default quienesSomos;