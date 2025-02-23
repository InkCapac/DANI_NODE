import React, { useRef } from "react";
import Footer from "./Footer";
import "./css_sub/altaUsuario.css";

const altaUsuario: React.FC = () => {
    const nombre = useRef<HTMLInputElement>(null);
    const apellido = useRef<HTMLInputElement>(null);
    const apellido2 = useRef<HTMLInputElement>(null);
    const correo = useRef<HTMLInputElement>(null);
    const birthDate = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const consentimiento = useRef<HTMLInputElement>(null);

    const enviar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usuario = {
            nombre: nombre.current?.value || "",
            apellido: apellido.current?.value || "",
            apellido2: apellido2.current?.value || "",
            correo: correo.current?.value || "",
            // Añade la fecha de nacimiento
            birthDate: birthDate.current?.value || "",
            pass: pass.current?.value || "", 
            telefono: telefono.current?.value ? telefono.current.value.trim() : "",
            consentimiento: consentimiento.current?.checked || false,
        };

        console.log("Datos a enviar:", JSON.stringify(usuario));

        fetch("http://localhost:8080/insertarUsuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then(async (response) => {
                const data = await response.json();
                if (!response.ok) {
                    console.error("Error en respuesta del servidor:", data);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log("Usuario insertado:", data);
            })
            .catch((error) => console.error("Error al insertar usuario:", error));
    };

    return (
        <div className="background-container-altaUsuario">
        <div className="container-altaUsuario">
        <p className="title-altaUsuario">
            Únete a Defenred!
        </p>
        <form onSubmit={enviar} className="form-container-altaUsuario">
            <div className="form-group-alta">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" ref={nombre} required />
            </div>

            <div className="form-group-alta">
                <label htmlFor="apellido">Apellido</label>
                <input id="apellido" type="text" ref={apellido} required />
            </div>

            <div className="form-group-alta">
                <label htmlFor="apellido2">Segundo Apellido</label>
                <input id="apellido2" type="text" ref={apellido2} />
            </div>

            <div className="form-group-alta">
                <label htmlFor="correo">Correo</label>
                <input id="correo" type="email" ref={correo} required />
            </div>

            <div className="form-group-alta">
                <label htmlFor="birthDate">Fecha de nacimiento</label>
                <input type="date" ref={birthDate} />
            </div>

            <div className="form-group-alta">
                <label htmlFor="pass">Contraseña</label>
                <input id="pass" type="password" ref={pass} required />
            </div>

            <div className="form-group-alta">
                <label htmlFor="telefono">Número de teléfono</label>
                <input id="telefono" type="tel" ref={telefono} pattern="[0-9]{10}" required />
            </div>
            <div className="form-group-alta">
                <label htmlFor="consentimiento">
                    <input id="consentimiento" type="checkbox" ref={consentimiento} required />
                    I consent to the terms and conditions
                </label>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
        </form>
        </div>
        <Footer />
        </div>
    );
};

export default altaUsuario;
