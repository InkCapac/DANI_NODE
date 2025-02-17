const express = require("express");
const path = require("path");
const cors = require("cors");
const puerto = 8080;
const app = express();
const mongoose = require("mongoose");

// Schemas
const userSchema = require("./schemas/usuario");
const donativoSchema = require("./schemas/donativo");

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

// Models
const Usuario = mongoose.model("Usuario", userSchema);
const Donativo = mongoose.model("Donativo", donativoSchema);

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

// Alta de Usuario
app.post("/insertarUsuario", (req, res) => {
  const datos = req.body;

  // Validar campos obligatorios
  if (
    !datos.nombre ||
    !datos.apellido ||
    !datos.correo ||
    !datos.birthDate ||
    !datos.pass ||
    datos.consentimiento === undefined
  ) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const nuevoUsuario = new Usuario({
    nombre: datos.nombre,
    apellido: datos.apellido,
    apellido2: datos.apellido2 || "",
    birthDate: datos.birthDate,
    correo: datos.correo,
    telefono: datos.telefono || "",
    pass: datos.pass,
    consentimiento: datos.consentimiento === true || datos.consentimiento === "true",
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
      res.status(500).json({ error: "Error al crear el usuario", details: error.message });
    });
});

// Obtener los usuarios creados
app.get("/obtenerUsuarios", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los datos",
    });
  }
});

// Enviar Donativo
app.post("/enviarDonativo", (req, res) => {
  const datos = req.body;

  // Validar campos obligatorios
  if (
    !datos.nombre ||
    !datos.apellido ||
    !datos.correo ||
    !datos.caridad ||
    datos.consentimiento === undefined
  ) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const nuevoDonativo = new Donativo({
    nombre: datos.nombre,
    apellido: datos.apellido,
    apellido2: datos.apellido2 || "",
    correo: datos.correo,
    caridad: datos.caridad,
    telefono: datos.telefono || "",
    observacion: datos.observacion || "",
    consentimiento: datos.consentimiento === true || datos.consentimiento === "true",
  });

  // Guardar en la base de datos
  nuevoDonativo
    .save()
    .then((donativo) => {
      console.log("Donativo enviado correctamente:", donativo);
      res.json({ message: "Donativo enviado correctamente", data: donativo });
    })
    .catch((error) => {
      console.error("Error al enviar el donativo:", error);
      res.status(500).json({ error: "Error al enviar el donativo", details: error.message });
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