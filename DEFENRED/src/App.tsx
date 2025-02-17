import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navtab from "./componentes/navTab";
import Index from "./index";
import Defenred from "./linkedPages/defenred";
import Contacto from "./linkedPages/contacto";
import QueHacemos from "./linkedPages/queHacemos";
import Defensoras from "./linkedPages/defensoras";
import AltaUsuario from "./linkedPages/subLinked/altaUsuario"; // Asegúrate de tener este componente
import Formulario from "./componentes/Formulario";
import VerMienbros from "./linkedPages/verMienbros";

import { ParallaxProvider } from "react-scroll-parallax";

/*Ver los datos de la bbdd*/
/*Apuntar que es useRef y useEffect*/
/*useEffect es para ver peticiones en la base de datos*/

const App: React.FC = () => {
  return (
    <>
    <div id="root">
    <ParallaxProvider>
        <section>
          {/* Barra de navegación */}
          <BrowserRouter>
            <Navtab />{" "}
            {/* Incluye la barra de navegación en todas las páginas */}
            <Routes>
              {/* Rutas de las páginas */}
              <Route path="/" element={<Index />} />
              <Route path="/inicio" element={<Index />} />
              {/* Páginas anidadas a inicio */}
              <Route path="/altaUsuario" element={<AltaUsuario />} />
              <Route path="/Defenred" element={<Defenred />} />
              {/* Rutas anidadas a Defenred */}
              <Route path="/quienesSomos" element={<Defensoras />} />
              <Route path="/porqueProyecto" element={<Defensoras />} />
              {/* Sección de ¿Qué hacemos? */}
              <Route path="/queHacemos" element={<QueHacemos />} />
              {/* Rutas anidadas a ¿Qué hacemos? */}
              <Route path="/Defensoras" element={<Defensoras />} />
              {/* Nested routes for ¿Qué hacemos? */}
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/formulario" element={<Formulario />} />
              {/* Página para ver usuarios */}
              <Route path="/verMienbros" element={<VerMienbros />} />
            </Routes>
          </BrowserRouter>
        </section>
      </ParallaxProvider>
    </div>
      
    </>
  );
};

export default App;
