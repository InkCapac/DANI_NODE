import "../linkedPages/css_pages/inicioStyle.css";
import streetImage from "../assets/img/street_defenred.webp";
import casaRespiro from "../assets/img/señoraLeyendo_defenred.webp";
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import MyGallery from "../componentes/SliderIMGS";
import Footer from "../componentes/Footer";

const Inicio = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: 50,
  });
  return (
    <>
      <MyGallery />
      <div className="background-imagen">
        <div className="cta-container" ref={parallax.ref}>
          <Link to="/altaUsuario" className="cta-unete">
            Únete a la red!
          </Link>
        </div>
        <div className="secciones-inicio-index">
          <div className="street-defenred-image">
            <img src={streetImage} alt="Vistas de Defenred" />
          </div>
          <p className="secciones-parrafo1-index">
            <span className="keywords">Defenred</span> es una organización
            comprometida con el apoyo y la protección de defensores de{" "}
            <span className="keywords">Defenred</span> que enfrentan riesgos en
            sus países de origen. A través de programas de refugio, formación,
            autocuidado y redes de apoyo, Defenred brinda a estos activistas un
            espacio seguro para recuperar fuerzas, adquirir nuevas herramientas
            y conectarse con aliados internacionales. Nuestra misión es
            fortalecer el bienestar, la seguridad y la resiliencia de quienes
            luchan por la justicia y los derechos humanos en contextos de alta
            vulnerabilidad, ofreciéndoles el respaldo necesario para que puedan
            continuar con su labor esencial.
          </p>
        </div>
        <div className="casaRespiro-inicio-index">
          <p className="casaRespiro-parrafo1-index">
            <span className="keywords">Defenred</span> lanza{" "}
            <span className="keywords">“Casa de Respiro”</span>, un programa en
            La Cabrera, Madrid, que brinda a defensores de{" "}
            <span className="keywords">derechos humanos</span> un espacio seguro
            para el autocuidado y el <span className="keywords">bienestar</span>
            . Durante 4-5 semanas, los participantes pueden desconectar y
            recibir apoyo psicológico, prácticas de trabajo corporal y
            actividades de ocio. El objetivo es que regresen con herramientas de
            autocuidado que fortalezcan su{" "}
            <span className="keywords">bienestar</span> y sostenibilidad en su
            labor activista.
          </p>
          <div className="casaRespiro-index-image">
            <img src={casaRespiro} alt="Casa de Respiro" />
            <button className="cta-casaRespiro-index">Casa de Respiro</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Inicio;
