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
      <p className="casaRespiro-parrafo1"><span className="keywords">Defenred</span> es una red de apoyo para <span className="keywords">activistas</span> defensores de los <span className="keywords">derechos humanos</span>, fundada en 2013, que buscan un lugar en el que <span className="keywords">descansar</span> y recuperarse de las duras experiencias que han vivido. Nos dedicamos a proporcionar un espacio seguro donde puedan encontrar <span className="keywords">ayuda</span> y 
restablecer tanto física como emocionalmente. Contamos con un equipo de voluntarios encargados de ofrecer <span className="keywords">ayuda</span> y de hacer que la experiencia de los inquilinos sea lo más cómoda posible.</p>
<p className="casaRespiro-parrafo1-quote"></p>
      </div>
    </section>
  );
};

export default casaRespiro;