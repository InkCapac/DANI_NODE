const express = require ('express');
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "contacto.html"));
})
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "404.html"));
})
app.listen(8080)