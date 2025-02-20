import defenredFooter from "../assets/img/defenred_footer.webp";
import "./css/footer.css";

const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footerContainer">
                    {/* Contenedor para la imagen y el contenido */}
                    <div className="footerContent">
                        {/* Imagen a la izquierda */}
                        <div className="footerImage">
                            <img src={defenredFooter} alt="Footer Image" />
                        </div>
                        {/* Contenido a la derecha */}
                        <div className="footerText">
                            <div className="socialIcons">
                                <a href="https://www.facebook.com/Defenred/?locale=es_ES" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/pbi_ee?igsh=MXhnaTFxbG4wZHoxNg==" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://x.com/defenred?t=sQtzzxouuO91MNuNcM0Elw&s=03" aria-label="Twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="https://www.youtube.com/@DEFENRED" aria-label="Youtube">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                            <p className="footer-disclaimer">
                                La protección y promoción de los derechos humanos políticos, civiles, económicos, sociales y culturales es la base de la libertad, la justicia y la paz. Las personas que trabajan diariamente para que estos derechos se hagan realidad son piezas clave en aquellos países con políticas más represivas, o en los países embarcados en reformas profundas o que atraviesan períodos de transición.
                            </p>
                            <p className="footer-p">
                                <span className="footer-year">© 2025 | Defenred - </span><span className="footer-links">Política de privacidad</span> - <span className="footer-links">Aviso Legal</span>. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;