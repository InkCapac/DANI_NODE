import Footer from "../componentes/Footer";
import "./css_pages/queHacemos.css";

const QueHacemos = () => {
  return (
    <div id="root">
      <main>
        <section>
          <img className="casaRespiro" src="src/assets/img/casa_respiro.webp" alt="Imagen casa respiro"/>
          <h1 className="textoNaranja">Casa de Respiro</h1>
          <p className="textoBlanco">Programa de respiro y formación sobre autocuidado</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QueHacemos;

