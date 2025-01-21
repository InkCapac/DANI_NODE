import React from "react";
import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/registro">Registrarse</Link>
        </li>
        <li>
          <Link to="/galeria">Galería</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
