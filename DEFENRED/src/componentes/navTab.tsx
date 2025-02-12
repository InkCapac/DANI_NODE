import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navtab.css';

const Navtab = () => {
  // Especifica el tipo de activeMenu
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  // Corregido: tipo explícito para `menu`
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveMenu(null);
    }
  }, [location.pathname]);

  const menuItems = [
    { label: 'Inicio', link: '/' },
    { 
      label: 'Defenred',
      link: '/defenred',
      submenu: [
        { label: '¿Quíenes somos?', link: '/somos#vision' },
        { label: '¿Por qué este proyecto?', link: '/somos#mision' },
      ],
    },
    { 
      label: '¿Qué hacemos?',
      link: '/queHacemos',
      submenu: [
        { label: 'Casa de Respiro', link: '/casaRespiro' },
        { label: 'En-redados', link: '/enRedados' },
        { label: 'Publicaciones', link: '/publicaciones' },
      ],
    },
    { 
      label: 'Defensoras',
      link: '/defensoras',
    },
    { label: 'Contacto', link: '/contacto' },
  ];

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="./src/assets/logo/logo_blackOrange.png" alt="Logo Defenred" />
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            className="navbar-item"
          >
            <Link to={item.link}>{item.label}</Link>
            {activeMenu === item.label && item.submenu && item.submenu.length > 0 && (
              <ul className="dropdown-menu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    <Link to={subItem.link}>{subItem.label}</Link>
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