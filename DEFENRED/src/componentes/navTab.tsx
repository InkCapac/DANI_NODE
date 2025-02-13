import React, { useState, useEffect } from 'react';
import './css/Navtab.css';

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Alternar la visibilidad del menú móvil
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Cerrar el menú móvil después de hacer clic en un enlace
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { label: 'Inicio', link: '/inicio' }, // Enlace a la sección "inicio"
    { 
      label: 'Defenred',
      link: '/defenred', // Enlace a la sección "defenred"
      submenu: [
        { label: '¿Quiénes somos?', link: '#quienesSomos' }, // Enlace a la sección "quienesSomos"
        { label: '¿Por qué este proyecto?', link: '#porqueProyecto' }, // Enlace a la sección "porqueProyecto"
      ],
    },
    { 
      label: '¿Qué hacemos?',
      link: '/queHacemos', // Enlace a la sección "queHacemos"
      submenu: [
        { label: 'Casa de Respiro', link: '#casaRespiro' }, // Enlace a la sección "casaRespiro"
        { label: 'En-redados', link: '#enRedados' }, // Enlace a la sección "enRedados"
        { label: 'Publicaciones', link: '#publicaciones' }, // Enlace a la sección "publicaciones"
      ],
    },
    { 
      label: 'Defensoras',
      link: '/defensoras', // Enlace a la sección "defensoras"
    },
    { label: 'Contacto', link: '/contacto' }, // Enlace a la sección "contacto"
  ];

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="./src/assets/logo/logo_blackOrange.png" alt="Logo Defenred" />
      </div>
      {/* Usamos <a> en lugar de <Link> 
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
        */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            className="navbar-item"
          >
            <a href={item.link} onClick={closeMobileMenu}>{item.label}</a> {/* Usamos <a> en lugar de <Link> */}
            {activeMenu === item.label && item.submenu && item.submenu.length > 0 && (
              <ul className="dropdown-menu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    <a href={subItem.link} onClick={closeMobileMenu}>{subItem.label}</a> {/* Usamos <a> en lugar de <Link> */}
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