//Para utilizar este file siempre debemos hacer el comando 'npm install express' 
const express = require ('express');
const path = require("path");
//Es mejor definir el puerto como un <<const>>
const puerto = 8080;
const app = express();
const mongoose = require('mongoose');

//Métodos para recibir información -> get post put patch delete

// "mongodb://localhost:PUERTO/BBDD"
//Conexión con MongoDB Compass (Software, instalar)
const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
}, apellido2:{
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
const url = "mongodb://localhost:27017/Sigma";
mongoose.connect(url, {
    useNewUrlParse: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log("Conectado!")
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "contacto.html"));
})
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "404.html"));
})
app.listen(puerto, () => {
    console.log(`El servidor ha arrancado en el puerto ${puerto}`);
    //La línea de abajo explica como se hacía antes
    console.log("El servidor ha arrancado en el puerto "+puerto);
});