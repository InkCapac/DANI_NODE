//Para utilizar este file siempre debemos hacer el comando 'npm install express' 
const express = require ('express');
const path = require("path");
//Es mejor definir el puerto como un <<const>>
const puerto = 8080;
const app = express();
const userSchema = require('../schemas/usuario');
const mongooseCon = require('../functions/conexion');
const mongoose = require('mongoose');
const usuario = require("usuario", userSchema);

//Métodos para recibir información -> get post put patch delete

// "mongodb://localhost:PUERTO/BBDD"
//Conexión con MongoDB Compass (Software, instalar)
/*
const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
}, 
apellido2:{
    type: String,
    required: false
},
edad:{
    type: String,
    required: true
},
correo:{
    type: String,
    required: true
},
contrasenia:{
    type: String,
    required: true
}
}
)
const Usuario = mongoose.model("Usuario", userSchema);

const nuevoUsuario = new Usuario({
    nombre: "Pepito",
    apellido1: "Garcia",
    apellido2: "Abascal",
    edad: 33,
    correo: "kchaviejas@vox.es",
    contrasenia: "ArribaEspania",
})
nuevoUsuario.save()
.then(usuario) => {
    console.log("Usuario creado correctamente: "+usuario)
const url = "mongodb://localhost:27017/Sigma";
mongoose.connect(url, {
    useNewUrlParse: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log("Conectado!")
})
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "contacto.html"));
})
app.get("insertarUsuario", (req, res) => {
    const Usuario = mongoose.model("Usuario", userSchema);
    const nuevoUsuario = new Usuario({
        nombre: "Pepito",
        apellido: "Garcia",
        apellido2: "Abascal",
        edad: 33,
        correo: "juanitosfuertes69@vox.es",
        contrasenia: "ArribaEspaña"


    })
    nuevoUsuario.save().then
    res.sendFile(path.join(__dirname, "404.html"));
})
app.listen(puerto, () => {
    console.log(`El servidor ha arrancado en el puerto ${puerto}`);
    //La línea de abajo explica como se hacía antes
    console.log("El servidor ha arrancado en el puerto "+puerto);
});