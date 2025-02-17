import Publicaciones from "./subLinked/Publicaciones";
import Footer from "../componentes/Footer";
import "./css_pages/queHacemos.css";

const QueHacemos = () => {
  return (
    <div> {/* Considera eliminar el id="root" si no es necesario */}
      <main>
        <h2 className="colorTexto">DEFENRED</h2>
        <Publicaciones />
      </main>
      <Footer />
    </div>
  );
};

export default QueHacemos;