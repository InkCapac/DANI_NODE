import { Link } from "react-router-dom"; // Import Link and Outlet
import "./css_sub/casaRespiro.css"

const casaRespiro = () => {

  return (
    /*Darle el css de section.tsx*/
    <section id="casaRespiro">
      <div>
        <p className="space-between-respiro"></p>
      </div>
      <div className="casaRespiro">
        <p className="casaRespiro-title">Casa de Respiro</p>
        <p className="casaRespiro-parrafo1">La casa del respiro es el corazón de<span className="keywords">Defenred</span>un lugar para que aquellos <span className="keywords">activistas</span>  que quieran<span className="keywords">descansar</span> y tomarse un pequeño<span className="keywords">descanso</span>de su actividad principal. A través de este espacio y de las actividades que ofrecemos, nuestro equipo es capaz de<span className="keywords"> ayudar </span>generando un estado de relajación y de recuperación del desgaste tanto físico como mental generado por sus diferentes situaciones sociales.
        </p>
        <p className="casaRespiro-parrafo1-quote"></p>
      </div>
    </section>
  );
};

export default casaRespiro;