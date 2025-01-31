import React from "react";
import "./css/footer.css"
const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footerContainer">
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/marcaPERU.lat">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/peru/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://x.com/marcaPERU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com/@marcaperu">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <p className="footer-p">© 2024 | Defenred. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;