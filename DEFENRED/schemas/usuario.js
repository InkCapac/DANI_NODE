const mongoose = require('mongoose');

//Métodos para recibir información -> get post put patch delete

// "mongodb://localhost:PUERTO/BBDD"
//Conexión con MongoDB Compass (Software, instalar)
/*
export const userSchema = new mongoose.Schema({
    */
   const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    apellido2: {
        type: String,
        required: false
    },
    edad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    }
}
)
module.exports = userSchema;