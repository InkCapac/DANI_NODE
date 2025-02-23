import React from "react";
import "./css_sub/altaModal_cuadro.css"

interface cuadroConfirmacion {
    isOpen: boolean;
    onClose: () => void;
}

const modalConfirmar: React.FC<cuadroConfirmacion> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>¡Registro exitoso!</h2>
                <p>Tu información ha sido registrada correctamente.</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default modalConfirmar;