const mongoose = require('mongoose');

//Métodos para recibir información -> get post put patch delete

// "mongodb://localhost:PUERTO/BBDD"
//Conexión con MongoDB Compass (Software, instalar)
/*
export const userSchema = new mongoose.Schema({
    */
    const donativoSchema = new mongoose.Schema({
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      apellido2: { type: String, default: "" },  // Puede ser vacío
      correo: { type: String, required: true },
      donativo: { type: Number, required: true },  // Si no hay donativo, se asigna 0
      telefono: { type: String, default: "" },  // Si no hay teléfono, se asigna vacío
      observacion: { type: String, default: "" },  // Si no hay observación, se asigna vacío
      consentimiento: { type: Boolean, required: true },  // Convertir el consentimiento a booleano
    });
    
    module.exports = donativoSchema;
    