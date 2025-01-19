import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Selecciona el contenedor con id "root"
const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('No se encontró un elemento con id "root". Asegúrate de que exista en el archivo HTML.');
}
