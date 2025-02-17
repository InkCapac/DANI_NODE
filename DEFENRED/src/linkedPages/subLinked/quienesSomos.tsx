import { Link } from "react-router-dom"; // Import Link and Outlet
import "./css_sub/quienesSomos.css"
import { useParallax } from "react-scroll-parallax";

const QuienesSomos = () => {

  return (
    /*DARLE EL CSS DE sections.tsx*/
    <section id="quienesSomos">
      <div>
      <p className="space-between-quienes"></p>
      </div>
      <div className="quienesSomos">
      <p className="quienes-title">¿QUIÉNES SOMOS?</p>
      <p className="quienes-parrafo1"><span className="keywords">Defenred</span> es una red de apoyo para <span className="keywords">activistas</span> defensores de los <span className="keywords">derechos humanos</span>, fundada en 2013, que buscan un lugar en el que <span className="keywords">descansar</span> y recuperarse de las duras experiencias que han vivido. Nos dedicamos a proporcionar un espacio seguro donde puedan encontrar <span className="keywords">ayuda</span> y 
restablecer tanto física como emocionalmente. Contamos con un equipo de voluntarios encargados de ofrecer <span className="keywords">ayuda</span> y de hacer que la experiencia de los inquilinos sea lo más cómoda posible.</p>
<p className="quienes-parrafo1-quote">
Nuestra historia salió de una simple idea: Crear un lugar donde la gente que <span className="keywords">defendiese</span>  nuestros <span className="keywords">derechos</span> pudiese <span className="keywords">descansar</span> en un lugar de paz, ahí es donde entra la Casa del Respiro, un hogar para aquellos que desean relajarse y escapar de la realidad de sus paises dirigidos por gobiernos autoritarios en contra de los <span className="keywords">derechos humanos</span> y opresores de los que los <span className="keywords">defienden</span>.</p>
      </div>
    </section>
  );
};

export default QuienesSomos;