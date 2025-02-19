import Sections from "../componentes/Sections";
/*Publicaciones va en ¿Qué hacemos?*/
import Publicaciones from "./subLinked/publicaciones";
import Footer from "../componentes/Footer";

const Defensoras = () => {
  return (
    <>
      <head>
        {/*Meta título*/}
        <title>Defensoras de Derechos Humanos | Apoyo y Resiliencia con Defenred" |
          Defensoras</title>
        {/*Meta descripción*/}
        <meta name="Descubre cómo Defenred apoya a personas defensoras de los derechos humanos, y la protección de las libertades fundamentales. Conoce sus historias, los desafíos que enfrentan.Infórmate sobre cómo contribuimos a su seguridad y visibilidad internacional." />
        {/*Lista de keywords*/}
        <meta name="keywords" content="La casa de Respiro, Defensores, Defensoras, Derechos" />
      </head>
      <div id="root">
        <Sections />
        <Publicaciones />
        <Footer />
      </div>
    </>

  );
};

export default Defensoras;
