//Para utilizar este file siempre debemos hacer el comando 'npm install express' 
const express = require ('express');
const path = require("path");
//Es mejor definir el puerto como un <<const>>
const puerto = 8080;
const app = express();

//Métodos para recibir información -> get post put patch delete

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