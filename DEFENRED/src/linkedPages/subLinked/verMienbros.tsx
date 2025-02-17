import { useEffect, useRef, useState } from "react"
import Usuario from "../../Usuario";
import "./css_sub/verMienbros.css";

const verMienbros = () => {
    const nombre = useRef<HTMLInputElement>(null);
    const apellido = useRef<HTMLInputElement>(null);
    const apellido2 = useRef<HTMLInputElement>(null);
    const birthDate = useRef<HTMLInputElement>(null);
    const correo = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const consentimiento = useRef<HTMLInputElement>(null);
    let [data, actualizarData] = useState<Usuario[]>([]);

    interface Usuario{
        _id: string,
        nombre: string,
        apellido: string,
        apellido2: string,
        correo: string,
        birthdate: string,
        telefono: string,
        consentimiento: boolean,
        /*Contraseña no puede estar aquí
        pass: string,*/

    }
    useEffect(() => {
        fetch("http://localhost:8080/obtenerUsuarios")
        .then((datos)=>{
            return datos.json();
        })
        .then((datos)=>{
            actualizarData(datos);
        })
    })
return(
    <>
    <header></header>
    <section className="grid tres">{
        data.map(articulo => {
            return (
                <div className="user-data-container">
                    <p className="user-id">{articulo._id}</p>
                    <p></p>
                    <p className="user-name">{articulo.nombre}</p>
                    <p className="user-apellido1">{articulo.apellido}</p>
                    <p className="user-apellido2">{articulo.apellido2}</p>
                    <p className="user-birthdate">{articulo.birthdate}</p>
                    <p className="user-correo">{articulo.correo}</p>
                    <p className="user-phone">{articulo.telefono}</p>
                </div>
            )

        })
    }
    </section>
    </>
)
}
export default verMienbros;
