import { useEffect, useState } from "react";
import Usuario from "../Usuario";
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
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <>
      <header></header>
      <section className="grid tres">
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
      </section>
    </>
  );
};

export default VerMienbros;