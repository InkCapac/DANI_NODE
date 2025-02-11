import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navtab.css";

const Navtab = () => {
  const [solid, setSolid] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSolid(true);
    } else {
      setSolid(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${solid ? "solid" : ""}`}>

      <div className="logo-nav">
        <img src="./src/assets/logo/logo_blackOrange.png" alt="Logo Defenred" />
        
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/defenred">Defenred</Link>
        </li>
        <li>
          <Link to="/queHacemos">¿Qué hacemos?</Link>
        </li>
        <li>
          <Link to="/defensoras">Defensoras</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navtab;
