import { useEffect, useState } from "react";
import Usuario from "../Usuario";
import Footer from "./subLinked/Footer";
import "./subLinked/css_sub/usuarioData.css";

const VerMienbros = () => {
  const [data, actualizarData] = useState<Usuario[]>([]);

  interface Usuario {
    _id: string;
    nombre: string;
    apellido: string;
    apellido2: string;
    birthdate: string;
    correo: string;
    telefono: string;
    consentimiento: boolean;
  }

  useEffect(() => {
    fetch("http://localhost:8080/obtenerUsuarios")
      .then((response) => response.json())
      .then((datos) => {
        actualizarData(datos);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, []);

  return (
      <section>
        <div className="usuario-data-container">
          <h1 className="title-mienbros-data">Usuarios afiliados a Defenred</h1>
          {data.map((usuario) => (
            <Usuario
              key={usuario._id}
              id={usuario._id}
              nombre={usuario.nombre}
              apellido={usuario.apellido}
              apellido2={usuario.apellido2}
              birthdate={usuario.birthdate}
              correo={usuario.correo}
              telefono={usuario.telefono}
              consentimiento={usuario.consentimiento}
            />
          ))}
        </div>
      <Footer />
      </section>
  );
};

export default VerMienbros;