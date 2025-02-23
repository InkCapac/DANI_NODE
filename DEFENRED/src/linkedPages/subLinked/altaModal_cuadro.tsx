import { useEffect } from "react";
import React from "react";
import "./css_sub/altaModal_cuadro.css"

interface cuadroConfirmacion {
    isOpen: boolean;
    onClose: () => void;
}

const modalConfirmar: React.FC<cuadroConfirmacion> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            // Cierra el modal automáticamente después de 5 segundos
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // 5000 ms = 5 segundos
            return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-contenido">
                <h2>¡Registro exitoso!</h2>
                <p>Tu información ha sido registrada correctamente.</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default modalConfirmar;