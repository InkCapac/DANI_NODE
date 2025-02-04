const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const userSchema = require("./schemas/usuario");

const puerto = 8080;
const app = express();

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/Defenred", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const Usuario = mongoose.model("usuario", userSchema);

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contacto.html"));
});

app.post("/insertarUsuario", (req, res) => {
  const datos = req.body;

  // Validar campos obligatorios
  if (!datos.nombre || !datos.apellido || !datos.correo || datos.consentimiento === undefined) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const nuevoUsuario = new Usuario({
    nombre: datos.nombre,
    apellido: datos.apellido,
    apellido2: datos.apellido2 || "",  // Puede ser vacío
    correo: datos.correo,
    donativo: datos.donativo || 0,  // Si no hay donativo, se asigna 0
    telefono: datos.telefono || "",  // Si no hay teléfono, se asigna vacío
    observacion: datos.observacion || "",  // Si no hay observación, se asigna vacío
    consentimiento: datos.consentimiento === "true",  // Convertir el consentimiento a booleano
  });

  // Guardar en la base de datos
  nuevoUsuario
    .save()
    .then((usuario) => {
      console.log("Usuario creado correctamente:", usuario);
      res.json({ message: "Usuario creado correctamente", data: usuario });
    })
    .catch((error) => {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Start Server
app.listen(puerto, () => {
  console.log(`El servidor ha arrancado en el puerto ${puerto}`);
});