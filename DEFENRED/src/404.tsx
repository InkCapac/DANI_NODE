import React from 'react';
import NavTab from './componentes/navTab';
import defenredGirl from "./assets/img/defenred_notFound.webp";

const NotFound: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src={defenredGirl} alt="Error 404" width={150} />
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <NavTab /> {/* Aquí se incluye el componente NavTab */}
    </div>
  );
};

export default NotFound;