import "./css_sub/quienesSomos.css";
import TerrazaDefenred from "../IMGS/defenred_terraza.webp";

const QuienesSomos = () => {

  return (
    /*DARLE EL CSS DE sections.tsx*/
    <section id="quienesSomos">
      <div className="quienesSomos-defenred">
        <p className="quienes-title-defenred">¿Quíenes Somos?</p>
        <p className="quienes-parrafo1-defenred"><span className="keywords-parrafo1">Defenred</span> es una red de apoyo para <span className="keywords-parrafo1">activistas</span> defensores de los <span className="keywords-parrafo1">derechos humanos</span>, fundada en 2013, que buscan un lugar en el que <span className="keywords-parrafo1">descansar</span> y recuperarse de las duras experiencias que han vivido. Nos dedicamos a proporcionar un espacio seguro donde puedan encontrar <span className="keywords-parrafo1">ayuda</span> y
          restablecer tanto física como emocionalmente. Contamos con un equipo de voluntarios encargados de ofrecer <span className="keywords-parrafo1">ayuda</span> y de hacer que la experiencia de los inquilinos sea lo más cómoda posible.
          <div className="terraza-image-quienes">
          <img src={TerrazaDefenred} alt="Defenred" />
          </div>
          <p className="quienes-parrafo1-quote">
          Nuestra historia salió de una simple idea: <span className="quienes-idea-quote">
          Crear un lugar donde la gente que <span className="keywords-parrafo1">defendiese</span>  nuestros <span className="keywords-parrafo1">derechos</span> pudiese <span className="keywords-parrafo1">descansar</span> en un lugar de paz, ahí es donde entra la Casa del Respiro</span>, un hogar para aquellos que desean relajarse y escapar de la realidad de sus paises dirigidos por gobiernos autoritarios en contra de los <span className="keywords-parrafo1">derechos humanos</span> y opresores de los que los <span className="keywords-parrafo1">defienden</span>.</p></p>
        <div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;