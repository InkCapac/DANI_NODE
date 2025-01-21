import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/css_navTab.css";

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
        <img src="path_to_logo.png" alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/registro">Registrarse</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default Navtab;
