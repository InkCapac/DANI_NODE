import { useState, useEffect } from "react";
import Logo from "../assets/logo/logo_blackOrange.webp";
import "./css/Navtab.css";

const Navtab = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Inicio", link: "/inicio" },
    {
      label: "Defenred",
      link: "/defenred",
      submenu: [
        { label: "¿Quiénes somos?", link: "#quienesSomos" },
        { label: "¿Por qué este proyecto?", link: "#porqueProyecto" },
      ],
    },
    {
      label: "¿Qué hacemos?",
      link: "/queHacemos",
      submenu: [
        { label: "Casa de Respiro", link: "#casaRespiro" },
        { label: "En-redados", link: "#enRedados" },
        { label: "Publicaciones", link: "#publicaciones" },
      ],
    },
    { label: "Defensoras", link: "/defensoras" },
    { label: "Contacto", link: "/contacto" },
  ];

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={Logo} alt="Logo Defenred" />
      </div>

      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>

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
            </a>
            {activeMenu === item.label && item.submenu && item.submenu.length > 0 && (
              <ul className="dropdown-menu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    <a href={subItem.link} onClick={closeMobileMenu}>
                      {subItem.label}
                    </a>
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