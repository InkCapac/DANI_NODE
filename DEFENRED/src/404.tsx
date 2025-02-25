import React from 'react';
import "./404.css";
import defenredGirl from "./assets/img/notFound_defenred.webp";

const NotFound: React.FC = () => {
  return (
    <div className='notFound-container'>
      <img 
        src={defenredGirl} 
        alt="Error 404 - Página no encontrada" 
      />
      <h1>Página no encontrada</h1>
      <p role="alert">Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default NotFound;