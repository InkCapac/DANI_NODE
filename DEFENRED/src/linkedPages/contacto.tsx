import Formulario from "../componentes/Formulario";
import Footer from "../componentes/Footer";
import "./css_pages/contacto.css";
import { useParallax } from "react-scroll-parallax";

const Contacto = () => {
  //AVERIGUAR MÁS EN LA PÁGINA OFICIAL DE PARALLAX (React Scroll Parallax)
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 200],
    speed: 10,
  });
  //En caso de no usar un const parallax, eliminarlo
  /*
      const parallax2 = useParallax<HTMLDivElement>({
        rotate: [0, -360],
      });*/
  return (
    <div id="root">
      <main>
        <div className="background">
          <h2 className="contact-title">Formulario de Defenred</h2>
          <div ref={parallax.ref}>
            <h3 className="meta-contact-title">
              Contacta con Nosotras | Asistencia Personalizada y Atención al
              Cliente"
            </h3>
          </div>
          <p className="contact-info">
            Si deseas saber más sobre nuestras iniciativas y cómo colaborar con
            nosotros, por favor comunícate con el equipo de Defenred. Estamos
            disponibles para colaborar contigo en proyectos, brindarte apoyo o
            informarte sobre nuestro trabajo en la promoción de los derechos
            humanos. ¡Estamos aquí para escucharte! Ponte en contacto con
            nosotros y únete a nuestra causa.
          </p>
          <div className="donative-container">
            <Formulario />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
