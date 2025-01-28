import React from "react";
import Articulo from "../Articulo";
import "../componentes/css/inicio-style.css"

const Inicio = () => {
    return (
        <div>
            <h2>DEFENRED</h2>
            <p className="parrafo1-inicio">
                Defenred es una organización comprometida con el apoyo y la protección de defensores de
                derechos humanos que enfrentan riesgos en sus países de origen. A través de programas de
                refugio, formación, autocuidado y redes de apoyo, Defenred brinda a estos activistas un espacio
                seguro para recuperar fuerzas, adquirir nuevas herramientas y conectarse con aliados
                internacionales.
            </p>
            <Articulo
                titulo="Aguacate"
                descripcion="Este es un aguacate delicioso."
                imagen="https://ruta-a-imagen.jpg"
            />
        </div>
    );
};

export default Inicio;

