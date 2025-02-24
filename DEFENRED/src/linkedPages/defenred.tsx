
import { Helmet } from "react-helmet-async";
import PorqueProyecto from "./subLinked/porqueProyecto";
import QuienesSomos from "./subLinked/quienesSomos";
import CasaRespiro from "./subLinked/casaRespiro";
import Footer from "../componentes/Footer";
import fountainDefenred from "../assets/img/fountain_defenred.webp";
import "./css_pages/defenred.css";


const Defenred = () => {

  return (
    <>
      <Helmet>
        {/*Meta título*/}
        <title>Quiénes somos - red de apoyo a defensores de los derechos humanos | Defenred</title>
        {/*Meta descripción*/}
        <meta name="Conoce a Defenred, una organización que trabaja incansablemente por la promoción de los derechos humanos y la justicia social. Aprende sobre nuestra misión, visión y valores, y descubre cómo buscamos mejorar la vida de las personas a través de proyectos de cooperación internacional, inclusión social y empoderamiento comunitario. Descubre quiénes somos y por qué existimos." />
        {/*Lista de keywords*/}
        <meta name="keywords" content="Salud, Defensores, Derechos humanos, Autocuidado" />
      </Helmet>
      <section className="seccion-defenred-inicio">
        <div className="defenred-gallery">
          <div className="defenred-gallery-container">
            <img className="gallery-item active" src={fountainDefenred} alt="Fuente" />
            <div className="image-text">
              <h1>¿Qué es Defenred?</h1>
              <p>Red de apoyo para la defensa de los derechos humanos</p>
            </div>
          </div>
          <img className="olas-defenred" src="src/assets/img/descarga.svg" alt="WAVES :)" />
        </div>
        <div className="sections-background-defenred">
          <QuienesSomos />
          <PorqueProyecto />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Defenred;