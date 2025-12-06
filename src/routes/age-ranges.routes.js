// src/routes/age-ranges.routes.js
const express = require("express");
const AgeRange = require("../models/ageRange");

const router = express.Router();

// Crear rango de edad
router.post("/", async (req, res) => {
  try {
    const range = await AgeRange.create(req.body);
    return res.status(201).json(range);
  } catch (error) {
    console.error("Error al crear rango de edad:", error);
    return res
      .status(400)
      .json({ message: "Error al crear rango de edad", error: error.message });
  }
});

// Listar rangos
router.get("/", async (req, res) => {
  try {
    const ranges = await AgeRange.find().sort({ minAge: 1 });
    return res.json(ranges);
  } catch (error) {
    console.error("Error al obtener rangos de edad:", error);
    return res.status(500).json({
      message: "Error al obtener rangos de edad",
      error: error.message,
    });
  }
});

module.exports = router;