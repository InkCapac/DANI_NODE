import Footer from "../componentes/Footer"
import "../linkedPages/css_pages/inicioStyle.css";
import "./css_pages/inicioStyle.css"
import streetImage from "../assets/img/street_defenred.jpg"
import { useParallax } from "react-scroll-parallax";

const Inicio = () => {
    const parallax = useParallax<HTMLDivElement>({
        speed: 50
    });
    return (
        <div>
            {/*<h2 className="title-inicio">DEFENRED</h2>*/}
            {/*METATÍTULO DE LA PÁGINA => "Defenred-Red de Apoyo para Defensores de Derechos Humanos"*/}
            <div className="cta-container" ref={parallax.ref}>
                <button className="cta-unete">Únete a la red!</button>
            </div>
            <div className="parrafo1-inicio">
            <img src={streetImage} alt="Vistas de Defenred" />
            <p>
                <span className="keywords">Defenred</span> es una organización comprometida con el apoyo y la protección de defensores de <span className="keywords">Defenred</span> que enfrentan riesgos en sus países de origen. A través de programas de
                refugio, formación, autocuidado y redes de apoyo, Defenred brinda a estos activistas un espacio
                seguro para recuperar fuerzas, adquirir nuevas herramientas y conectarse con aliados
                internacionales.
                Nuestra misión es fortalecer el bienestar, la seguridad y la resiliencia de quienes luchan por la
                justicia y los derechos humanos en contextos de alta vulnerabilidad, ofreciéndoles el respaldo
                necesario para que puedan continuar con su labor esencial.
            </p>
            </div>
            <Footer />
        </div>
    );
};

export default Inicio;

