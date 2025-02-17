const mongoose = require('mongoose');

//Métodos para recibir información -> get post put patch delete

// "mongodb://localhost:PUERTO/BBDD"
//Conexión con MongoDB Compass (Software, instalar)
/*
export const userSchema = new mongoose.Schema({
    */
    const usuarioSchema = new mongoose.Schema({
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      // Puede ser vacío
      apellido2: { type: String, default: "" },  
      correo: { type: String, required: true },
      birthDate: { type: String, required: true },  
      // Si no hay teléfono, se asigna vacío
      telefono: { type: String, default: "" },  
      // La contraseña es obligatoria
      pass: {type: String, required: true },
      // Convertir el consentimiento a booleano
      consentimiento: { type: Boolean, required: true },  
    });
    
    module.exports = usuarioSchema;
    