import React from "react";
import PorqueProyecto from "../linkedPages/subLinked/porqueProyecto"

const Defenred = () => {
    return (
        <section>
            <Sections/>
            <h2>¿QUIÉNES SOMOS?</h2>
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
        </section>
    );
};

export default Defenred;