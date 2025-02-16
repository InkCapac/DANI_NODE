
import PorqueProyecto from "./subLinked/porqueProyecto";
import QuienesSomos from "./subLinked/quienesSomos";
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
    <section className="seccion-defenred-inicio">
      <div className="defenred-gallery">
        <div className="defenred-gallery-container">
          <img className="gallery-item active" src={fountainDefenred} alt="Fuente" />
          <div className="image-text">
            <h1>¿Qué es Defenred?</h1>
            <p>Red de apoyo para la defensa de los derechos humanos</p>
          </div>
        </div>
      </div>

      {/* Asignar cada ref a un elemento único 
      <div className="cta-container" ref={parallax1.ref}>
        <button className="cta-porque">¿Por qué elegimos este proyecto?</button>
      </div>
        */}
      <QuienesSomos />
      <PorqueProyecto />
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Defenred;