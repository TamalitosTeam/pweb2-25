// src/routes/difficulty-levels.routes.js
const express = require("express");
const DifficultyLevel = require("../models/difficultyLevel");

const router = express.Router();

// Crear nivel de dificultad
router.post("/", async (req, res) => {
  try {
    const level = await DifficultyLevel.create(req.body);
    return res.status(201).json(level);
  } catch (error) {
    console.error("Error al crear nivel de dificultad:", error);
    return res.status(400).json({
      message: "Error al crear nivel de dificultad",
      error: error.message,
    });
  }
});

// Listar niveles
router.get("/", async (req, res) => {
  try {
    const levels = await DifficultyLevel.find().sort({ order: 1 });
    return res.json(levels);
  } catch (error) {
    console.error("Error al obtener niveles de dificultad:", error);
    return res.status(500).json({
      message: "Error al obtener niveles de dificultad",
      error: error.message,
    });
  }
});

module.exports = router;
