import { Helmet } from "react-helmet-async";
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
      <Helmet>
        {/*Meta título*/}
        <title>Defenred - Red de Apoyo para Defensores de Derechos Humanos</title>
        {/*Meta descripción*/}
        <meta name="description" content="Bienvenido a Defenred, una organización comprometida con la defensa de los derechos humanos. Descubre nuestras iniciativas tanto a nivel nacional como internacional para promover la inclusión social y el desarrollo sostenible y favorable hacia las comunidades de todo el mundo."/>
        {/*Lista de keywords*/}
        <meta name="keywords" content="defenred, derechos humanos, bienestar, casa de Respiro"/>
      </Helmet>
      <MyGallery />
      <div className="background-imagen">
        <div className="cta-container" ref={parallax.ref}>
          <Link to="/altaUsuario" className="cta-unete">
            Únete a la red!
          </Link>
        </div>
        <div className="inicio-index">
          <div className="title-defenred-index">
            <p>Defenred</p>
          </div>
          <div className="secciones-inicio-index">
            <div className="street-defenred-image">
              <img src={streetImage} alt="Vistas de Defenred" />
            </div>
            <p className="secciones-parrafo1-index">
              <span className="keywords">Defenred</span> es una organización comprometida con el apoyo y la protección de defensores de <span className="keywords">derechos humanos</span> que enfrentan riesgos en sus países de origen. A través de programas de refugio, formación, autocuidado y redes de apoyo, Defenred brinda a estos activistas un espacio seguro para recuperar fuerzas, adquirir nuevas herramientas y conectarse con aliados internacionales.
              <span className="inicio-index-quotes"> Nuestra <span className="keywords">misión</span> es fortalecer el <span className="keywords">bienestar</span>, la seguridad y la resiliencia de quienes luchan por la justicia y los derechos humanos en contextos de alta vulnerabilidad, ofreciéndoles el respaldo necesario para que puedan continuar con su labor esencial.</span>
            </p>
          </div>
          <div className="title-casaRespiro-index">
            <p>Casa de Respiro</p>
          </div>
          <div className="casaRespiro-inicio-index">
            <p className="casaRespiro-parrafo1-index">
              <span className="inicio-index-quotes">
                <span className="keywords">Defenred</span> lanza<span className="keywords"> “Casa de Respiro”</span>, un programa en
                La Cabrera, Madrid, que brinda a defensores de <span className="keywords">derechos humanos</span> un espacio seguro
                para el autocuidado y el <span className="keywords">bienestar</span>
                .</span> Durante 4-5 semanas, los participantes pueden desconectar y
              recibir apoyo psicológico, prácticas de trabajo corporal y
              actividades de ocio. El objetivo es que regresen con herramientas de
              autocuidado que fortalezcan su <span className="keywords">bienestar</span> y sostenibilidad en su
              labor activista.
            </p>
            <div className="casaRespiro-index-image">
              <img src={casaRespiro} alt="Casa de Respiro" />
              <button className="cta-casaRespiro-index">Casa de Respiro</button>
            </div>
          </div>
            <Link to="/contacto" className="title-contacto-index">
            Contacta con nosotros!
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Inicio;
