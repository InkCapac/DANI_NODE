import React from "react";
import "./css_sub/porqueProyecto.css";
import EquipoDefenred from "../IMGS/defenred_Equipo.webp";
import ReunionDefenred from "../IMGS/reunion_defenred.webp";
const PorqueProyecto: React.FC = () => {
    return (
        <section id="porqueProyecto">
            <div className="porque-inicio-defenred">
                <div>
                    <p className="title-porque-parrafo1">¿Por qué este proyecto?</p>
                    <p className="porque-parrafo1">
                        <span className="porque-defenred-quotes">
                            <span className="keywords">Defenred</span> es una organización comprometida con el apoyo y la protección de defensores de <span className="keywords">Defenred</span> que enfrentan riesgos en sus países de origen.
                        </span> A través de programas de refugio, formación, autocuidado y redes de apoyo, Defenred brinda a estos activistas un espacio
                        seguro para recuperar fuerzas, adquirir nuevas herramientas y conectarse con aliados
                        internacionales. Nuestra misión es fortalecer el bienestar, la seguridad y la resiliencia de quienes luchan por la justicia y los derechos humanos en contextos de alta vulnerabilidad, ofreciéndoles el respaldo necesario para que puedan continuar con su labor esencial.
                    </p>
                    <div className="team-porque-defenred">
                        <img src={EquipoDefenred} alt="Defenred" />
                    </div>
                    <p className="porque-parrafo2">
                        Si bien muchos <span className="keywords">defensores de los derechos humanos</span> están desarrollando sus propias estrategias de promoción, el alto costo que su trabajo supone para su <span className="keywords">salud</span> requiere un mayor apoyo. Su profundo conocimiento de las realidades locales y su impacto positivo en las comunidades los convierte en agentes importantes para un cambio ambiental equitativo y duradero.<span className="porque-defenred-quotes">Apoyarlos y ampliar su trabajo no sólo protege a los <span className="keywords">defensores</span> sino que también a
                        su <span className="keywords">autocuidado</span> en los <span className="keywords">derechos humanos</span> y el desarrollo de sus comunidades, beneficiando a todos los que se preocupan por su trabajo.</span>
                    </p>
                    <div className="team-porque-defenred">
                        <img src={ReunionDefenred} alt="Defenred" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PorqueProyecto;