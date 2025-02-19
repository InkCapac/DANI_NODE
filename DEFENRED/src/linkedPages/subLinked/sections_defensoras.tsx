import React from "react";
import defensorasMain from "../assets/img/defensoras_defenred.webp";
import "./css_sub/sections_defensoras.css";
import defenredTrain from "../IMGS/defenred_train.webp";

const sec_defensoras = () => {
    return (
        <>
            <section>
                <div className="quote-defensoras-sections">
                    <p>"Descubre cómo Defenred apoya a personas defensoras de los derechos
                        humanos, y la protección de las libertades fundamentales. Conoce sus historias, los desafíos
                        que enfrentan.Infórmate sobre cómo contribuimos a su seguridad y visibilidad internacional."</p>
                </div>
                <div className="sections-defensoras">
                    <h1 className='title-inicio-defensoras'>El sentido de nuestro trabajo</h1>
                    <div className="section-defensoras">
                        <p>La <span className="keywords-defensoras">Casa de Respiro
                        </span> es un proyecto vital que proporciona cuidado personal a <span className="keywords-defensoras">defensores
                            </span> de los derechos humanos de todo el mundo. Este lugar brinda un espacio para descansar y recuperarse a aquellos que enfrentan desafíos difíciles en su trabajo, especialmente en lugares poco amigables. En la <span className="keywords-defensoras">Casa de Respiro
                            </span>, los defensores y <span className="keywords-defensoras">defensoras
                            </span> abordan diversos temas como la defensa de la tierra, <span className="keywords-defensoras">derechos
                            </span> de migrantes, medio ambiente, apoyo a víctimas de desapariciones forzadas y derechos de mujeres.<br/>
                            <span className="section-defensoras-quote">Las personas <span className="keywords-defensoras">defensoras
                            </span> que llegan a la Casa de Respiro suelen provenir de entornos difíciles y, a menudo, peligrosos, lo que afecta su salud física, emocional y mental.</span> Es importante que dediquen un tiempo para cuidar de sí mismos, así podrán procesar lo que han vivido y fortalecer su capacidad de resistir. <span className="section-defensoras-quote">La mayoría de estos activistas cuentan con el apoyo de importantes organizaciones y colectivos en sus países, como la IMD, Caminando Fronteras o la Red Nacional de Mujeres Defensoras de Honduras.</span> Estos grupos no solo brindan apoyo a los <span className="keywords-defensoras">defensores
                            </span>, sino que también trabajan en conjunto con la Casa para garantizar que el cuidado </p>
                        <img src={defenredTrain} alt="Reunión Defenred" />
                    </div>
                    </div>
                    <img src="" alt="" />
            </section>
        </>
    );
};

export default sec_defensoras;