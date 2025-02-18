
import "./css/footer.css"
const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footerContainer">
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/Defenred/?locale=es_ES">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/pbi_ee?igsh=MXhnaTFxbG4wZHoxNg==">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://x.com/defenred?t=sQtzzxouuO91MNuNcM0Elw&s=03">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com/@DEFENRED">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    {/* Nueva sección de enlaces */}
           

                    <p className="footer-p">© 2025 | Defenred. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;