
import PorqueProyecto from "./subLinked/porqueProyecto";
import QuienesSomos from "./subLinked/quienesSomos";
import CasaRespiro from "./subLinked/casaRespiro";
import Footer from "../componentes/Footer";
import fountainDefenred from "../assets/img/fountain_defenred.webp";
import "./css_pages/defenred.css";


const Defenred = () => {
  {/*
    // Crear dos instancias separadas de useParallax
    const parallax1 = useParallax<HTMLDivElement>({
      speed: 50,
    });
    */
  }

  return (
    <>
      <head>
        {/*Meta título*/}
        <title>Quiénes somos- red de apoyo a defensores de los derechos humanos | Defenred</title>
        {/*Meta descripción*/}
        <meta name="Conoce a Defenred, una organización que trabaja incansablemente por la promoción de los derechos humanos y la justicia social. Aprende sobre nuestra misión, visión y valores, y descubre cómo buscamos mejorar la vida de las personas a través de proyectos de cooperación internacional, inclusión social y empoderamiento comunitario. Descubre quiénes somos y por qué existimos." />
        {/*Lista de keywords*/}
        <meta name="keywords" content="Salud, Defensores, Derechos humanos, Autocuidado" />
      </head>
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

        {/* Asignar cada ref a un elemento único 
      <div className="cta-container" ref={parallax1.ref}>
      <button className="cta-porque">¿Por qué elegimos este proyecto?</button>
      </div>
      */}
        <QuienesSomos />
        <CasaRespiro />
        <PorqueProyecto />
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Defenred;