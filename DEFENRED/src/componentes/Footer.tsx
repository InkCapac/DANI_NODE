
import "./css/footer.css"
const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footerContainer">
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
                    <p className="footer-disclaimer">La protección y promoción de los derechos humanos (políticos, civiles, económicos, sociales y culturales) es la base de la libertad, la justicia y la paz. Las personas que trabajan diariamente para que estos derechos se hagan realidad  son piezas clave en aquellos países con políticas más represivas, o en los países embarcados en reformas profundas o que atraviesan períodos de transición.</p>
                    {/* Nueva sección de enlaces */}
                    <p className="footer-p">© 2025 | Defenred- Política de privacidad - Aviso Legal. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;