const mongoose = require('mongoose');

const donativoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  apellido2: { type: String, default: "" },
  correo: { type: String, required: true },
  caridad: { type: Number, required: true },
  telefono: { type: String, default: "" },
  observacion: { type: String, default: "" },
  consentimiento: { type: Boolean, required: true },
});

module.exports = donativoSchema;