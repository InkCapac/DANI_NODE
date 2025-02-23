import Formulario from "../componentes/Formulario";
import Footer from "../componentes/Footer";
import "./css_pages/contacto.css";

const Contacto = () => {
  //AVERIGUAR MÁS EN LA PÁGINA OFICIAL DE PARALLAX
  //En caso de no usar un const parallax, eliminarlo
  return (
    <div id="root">
      <head>
        {/*Meta título*/}
        <title>Contacta con Nosotras | Asistencia Personalizada y Atención al Cliente</title>
        {/*Meta descripción*/}
        <meta name="Si deseas saber más sobre nuestras iniciativas y cómo colaborar con nosotros, por favor comunícate con el equipo de Defenred. Estamos disponibles para colaborar contigo en proyectos,brindarte apoyo o informarte sobre nuestro trabajo en la promoción de los derechos humanos. ¡Estamos aquí para escucharte! Ponte en contacto con nosotros y únete a nuestra causa." />
        {/*Lista de keywords*/}
        <meta name="keywords" content="Contacto Defenred, Asistencia personalizada Defenred, Colaboración Defenred" />
      </head>
      <main>
        <div className="background-contacto">
          <h2 className="contact-title">Formulario de Defenred</h2>
          {/*
            <div>
              <h3 className="meta-contact-title">
                Contacta con Nosotras | Asistencia Personalizada y Atención al
                Cliente
              </h3>
            </div>
          */}
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
