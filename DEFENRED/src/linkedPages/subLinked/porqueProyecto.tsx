import React from "react";
const PorqueProyecto: React.FC = () => {
  return (
    <div>
    {/*<h2 className="title-inicio">DEFENRED</h2>*/}
    {/*METATÍTULO DE LA PÁGINA => "Defenred-Red de Apoyo para Defensores de Derechos Humanos"*/}
    <div className="porque-inicio">
    <div className="street-defenred-image">
        <div>
        <img src="" alt="Vistas de Defenred" />
        </div>
        <p className="porque-parrafo1">
            <span className="keywords">Defenred</span> es una organización comprometida con el apoyo y la protección de defensores de <span className="keywords">Defenred</span> que enfrentan riesgos en sus países de origen. A través de programas de
            refugio, formación, autocuidado y redes de apoyo, Defenred brinda a estos activistas un espacio
            seguro para recuperar fuerzas, adquirir nuevas herramientas y conectarse con aliados
            internacionales.
            Nuestra misión es fortalecer el bienestar, la seguridad y la resiliencia de quienes luchan por la
            justicia y los derechos humanos en contextos de alta vulnerabilidad, ofreciéndoles el respaldo
            necesario para que puedan continuar con su labor esencial.
        </p>
    </div>
    </div>
    <div className="casaRespiro-inicio">
        <p className="casaRespiro-parrafo1">
            <span className="keywords">Defenred</span> lanza <span className="keywords">“Casa de Respiro”</span>, un programa en La Cabrera, Madrid, que brinda a
            defensores de <span className="keywords">derechos humanos</span> un espacio seguro para el autocuidado y el <span className="keywords">bienestar</span>.
            Durante 4-5 semanas, los participantes pueden desconectar y recibir apoyo psicológico,
            prácticas de trabajo corporal y actividades de ocio. El objetivo es que regresen con herramientas
            de autocuidado que fortalezcan su <span className="keywords">bienestar</span> y sostenibilidad en su labor activista.
        </p>
        <div className="casaRespiro-inicio-image">
            <img src="" alt="Casa de Respiro" />
            <button className="cta-casaRespiro">Casa de Respiro</button>
        </div>
    </div>
</div>

);
};

export default PorqueProyecto;