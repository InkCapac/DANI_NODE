//Para utilizar este file siempre debemos hacer el comando 'npm install express' 
const express = require ('express');
const path = require("path");
const cors = require("cors");
//Es mejor definir el puerto como un <<const>>
const puerto = 8080;
const app = express();
const userSchema = require('./schemas/usuario');
const mongooseCon = require('./functions/conexion');
const mongoose = require("mongoose");
//(REDUNDANTE) const mongoose = require('mongoose');
const Usuario = mongoose.model("usuario", userSchema);
console.log(userSchema);

//Métodos para recibir información -> get post put patch delete

// "mongodb://localhost:PUERTO/BBDD"
//Conexión con MongoDB Compass (Software, instalar)

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "contacto.html"));
})
//Cambiamos get por post
app.post("/insertarUsuario", (req, res) => {
    const datos = req.body;
    console.log(req.body);
    const nuevoUsuario = new Usuario({
        nombre: datos.nombre,
        apellido: datos.apellido,
        apellido2: datos.apellido2,
        edad: datos.edad,
        correo: datos.correo,
        contrasenia: datos.pass+"1234"
    });
    nuevoUsuario.save()
        .then((usuario) => {
            console.log("Usuario creado correctamente: " + usuario);
        })
            res.send("Usuario creado correctamente");
});
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
})
app.listen(puerto, () => {
    console.log(`El servidor ha arrancado en el puerto ${puerto}`);
    //La línea de abajo explica como se hacía antes
    console.log("El servidor ha arrancado en el puerto "+puerto);
});