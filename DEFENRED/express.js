//Para utilizar este file siempre debemos hacer el comando 'npm install express' 
//Es mejor definir el puerto como un <<const>>
const express = require ('express');
const path = require("path");
const puerto = 8080;
const app = express();
const userSchema = require('./schemas/usuario');
const mongoose = require('mongoose');
const mongoose = require ('./functions/conexion');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "contacto.html"));
})

app.get("/insertarUsuario", (req, res) => {
    const Usuario = mongoose.model("Usuario", userSchema);
    const nuevoUsuario = new Usuario({
        nombre: "Pepito",
        apellido: "Garcia",
        apellido2: "Abascal",
        edad: 33,
        correo: "juanitoelfuerte69@vox.es",
        contrasenia: "ArribaEspaña"
    })
    nuevoUsuario.save()
    .then((usuario) => {
        console.log("Usuario creado correctamente: "+usuario)
    })
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
})

app.listen(puerto, () => {
    console.log(`El servidor ha arrancado en el puerto ${puerto}`)
    console.log("El servidor ha arrancado en el puerto "+puerto)
});
