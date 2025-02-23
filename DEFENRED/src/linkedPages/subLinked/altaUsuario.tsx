import React, { useRef, useState } from "react";
import Footer from "./Footer";
import ConfirmationModal from "./altaModal_cuadro"; // Importa el modal
import "./css_sub/altaUsuario.css";

const AltaUsuario: React.FC = () => {
    const nombre = useRef<HTMLInputElement>(null);
    const apellido = useRef<HTMLInputElement>(null);
    const apellido2 = useRef<HTMLInputElement>(null);
    const correo = useRef<HTMLInputElement>(null);
    const birthDate = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const consentimiento = useRef<HTMLInputElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

    const enviar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usuario = {
            nombre: nombre.current?.value || "",
            apellido: apellido.current?.value || "",
            apellido2: apellido2.current?.value || "",
            correo: correo.current?.value || "",
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
                setIsModalOpen(true); // Abre el modal si la solicitud es exitosa
            })
            .catch((error) => {
                console.error("Error al insertar usuario:", error);
                alert("Hubo un error al registrar tus datos. Por favor, intenta de nuevo.");
            });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Cierra el modal
    };

    return (
        <div className="background-container-altaUsuario">
            <div className="container-altaUsuario">
                <p className="title-altaUsuario">
                    Únete a Defenred!
                </p>
                <form onSubmit={enviar} className="form-container-altaUsuario">
                    {/* Campos del formulario */}
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
                            Acepto los términos y condiciones
                        </label>
                    </div>

                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
            <Footer />
            <ConfirmationModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </div>
    );
};

export default AltaUsuario;