// src/server.js
const categoriesRoutes = require("./routes/categories.routes");
const difficultyLevelsRoutes = require("./routes/difficulty-levels.routes");
const ageRangesRoutes = require("./routes/age-ranges.routes");

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const examsRoutes = require("./routes/exams.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
app.use("/api/exams", examsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/difficulty-levels", difficultyLevelsRoutes);
app.use("/api/age-ranges", ageRangesRoutes);



// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "API de Exámenes funcionando :p" });
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
