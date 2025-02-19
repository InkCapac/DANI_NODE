import { useState, useEffect } from "react";
import Logo from "../assets/logo/logo_blackOrange.webp";
import "./css/Navtab.css";

const Navtab = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const closeMobileMenu = () => {
    // Cerrar el menú móvil después de hacer clic en un enlace
    setIsMobileMenuOpen(false); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    // Enlace a la sección "inicio"
    { label: "Inicio", link: "/inicio" }, 
    {
      label: "Defenred",
      // Enlace a la sección "defenred"
      link: "/defenred", 
      submenu: [
        // Enlace a la sección "quienesSomos"
        { label: "¿Quiénes somos?", link: "#quienesSomos" }, 
        // Enlace a la sección "porqueProyecto"
        { label: "¿Por qué este proyecto?", link: "#porqueProyecto" }, 
      ],
    },
    {
      label: "¿Qué hacemos?",
      link: "/queHacemos", // Enlace a la sección "queHacemos"
      submenu: [
        { label: "Casa de Respiro", link: "#casaRespiro" }, // Enlace a la sección "casaRespiro"
        { label: "En-redados", link: "#enRedados" }, // Enlace a la sección "enRedados"
        { label: "Publicaciones", link: "#publicaciones" }, // Enlace a la sección "publicaciones"
      ],
    },
    {
      label: "Defensoras",
      link: "/defensoras", // Enlace a la sección "defensoras"
    },
    { label: "Contacto", link: "/contacto" }, // Enlace a la sección "contacto"
  ];

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={Logo} alt="Logo Defenred" />
      </div>
      {/* Usamos <a> en lugar de <Link> 
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
        */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            className="navbar-item"
          >
            <a href={item.link} onClick={closeMobileMenu}>
              {item.label}
            </a>{" "}
            {/* Usamos <a> en lugar de <Link> */}
            {activeMenu === item.label &&
              item.submenu &&
              item.submenu.length > 0 && (
                <ul className="dropdown-menu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="dropdown-item">
                      <a href={subItem.link} onClick={closeMobileMenu}>
                        {subItem.label}
                      </a>{" "}
                      {/* Usamos <a> en lugar de <Link> */}
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navtab;
