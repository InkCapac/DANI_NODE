import React, { useEffect } from "react";
import "./css_sub/contactoModal.css";

interface ModalDonativoProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnvioDonativoModal: React.FC<ModalDonativoProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Cierra el modal automáticamente después de 5 segundos (5000 ms)
      const closeTimer = setTimeout(() => {
        onClose();
      }, 5000); // Cambia este valor para ajustar el tiempo de duración

      return () => {
        clearTimeout(closeTimer); // Limpia el timer si el componente se desmonta
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-contacto">
      <div className="modal-contenido-contacto">
        <h2>¡Gracias por tu contribución!</h2>
        <p>Esta ventana se cerrará automáticamente.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default EnvioDonativoModal;