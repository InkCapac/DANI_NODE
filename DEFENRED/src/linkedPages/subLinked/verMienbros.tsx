import { useEffect, useRef, useState } from "react"
import Articulo from "../../Usuario";

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
        fetch("localhost:8080/obtenerUsuarios")
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
                <div>
                    <p>{articulo._id}</p>
                    <p>{articulo.nombre}</p>
                    <p>{articulo.apellido}</p>
                    <p>{articulo.apellido2}</p>
                    <p>{articulo.birthdate}</p>
                    <p>{articulo.correo}</p>
                    <p>{articulo.telefono}</p>
                </div>
            )

        })
    }
    </section>
    </>
)
}
export default verMienbros;
