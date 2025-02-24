import { useEffect, useState } from "react";
import Donativo from "../Donativo";
import Footer from "./subLinked/Footer";
import "./subLinked/css_sub/donativoData.css";

const VerDonativos = () => {
  const [data, actualizarData] = useState<donativo[]>([]);

  interface donativo {
    _id: string;
    nombre: string;
    apellido: string;
    apellido2: string;
    correo: string;
    caridad: string;
    telefono: string;
    consentimiento: boolean;
  }

  useEffect(() => {
    fetch("http://localhost:8080/obtenerdonativos")
      .then((response) => response.json())
      .then((datos) => {
        actualizarData(datos);
      })
      .catch((error) => {
        console.error("Error al obtener los donativos:", error);
      });
  }, []);

  return (
      <section>
        <div className="donativo-data-container">
          <h1 className="title-mienbros-data">donativos afiliados a Defenred</h1>
          {data.map((donativo) => (
            <Donativo
              key={donativo._id}
              id={donativo._id}
              nombre={donativo.nombre}
              apellido={donativo.apellido}
              apellido2={donativo.apellido2}
              correo={donativo.correo}
              caridad={donativo.ca}
              telefono={donativo.telefono}
              consentimiento={donativo.consentimiento}
            />
          ))}
        </div>
      <Footer />
      </section>
  );
};

export default VerDonativos;