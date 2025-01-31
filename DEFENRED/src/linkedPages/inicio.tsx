import React from "react";
import "./css_pages/inicioStyle.css"

const Inicio = () => {
    return (
        <div>
            <h2 className="title-inicio">DEFENRED</h2>
            <h3>"Defenred-Red de Apoyo para Defensores de Derechos Humanos"</h3>
            <p className="parrafo1-inicio">
                <span className="keywords">Defenred</span> es una organización comprometida con el apoyo y la protección de defensores de <span className="keywords">Defenred</span> que enfrentan riesgos en sus países de origen. A través de programas de
                refugio, formación, autocuidado y redes de apoyo, Defenred brinda a estos activistas un espacio
                seguro para recuperar fuerzas, adquirir nuevas herramientas y conectarse con aliados
                internacionales.
            </p>
        </div>
    );
};

export default Inicio;

