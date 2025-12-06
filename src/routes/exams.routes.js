
// src/routes/exams.routes.js
const express = require("express");
const Exam = require("../models/Exam");

const router = express.Router();

// Crear examen
router.post("/", async (req, res) => {
  try {
    const exam = await Exam.create(req.body);
    return res.status(201).json(exam);
  } catch (error) {
    console.error("Error al crear examen:", error);
    return res
      .status(400)
      .json({ message: "Error al crear examen", error: error.message });
  }
});

// Listar exámenes (con filtros opcionales)
router.get("/", async (req, res) => {
  try {
    const { difficultyLevel, ageRange, category } = req.query;

    const filter = {};
    if (difficultyLevel) filter.difficultyLevel = difficultyLevel;
    if (ageRange) filter.ageRange = ageRange;
    if (category) filter.category = category;

    const exams = await Exam.find(filter);
    return res.json(exams);
  } catch (error) {
    console.error("Error al obtener exámenes:", error);
    return res
      .status(500)
      .json({ message: "Error al obtener exámenes", error: error.message });
  }
});

// Obtener examen por ID
router.get("/:id", async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: "Examen no encontrado" });
    }
    return res.json(exam);
  } catch (error) {
    console.error("Error al obtener examen:", error);
    return res.status(400).json({ message: "ID inválido" });
  }
});

// Actualizar examen
router.put("/:id", async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!exam) {
      return res.status(404).json({ message: "Examen no encontrado" });
    }
    return res.json(exam);
  } catch (error) {
    console.error("Error al actualizar examen:", error);
    return res
      .status(400)
      .json({ message: "Error al actualizar examen", error: error.message });
  }
});

// Eliminar examen
router.delete("/:id", async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: "Examen no encontrado" });
    }
    return res.json({ message: "Examen eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar examen:", error);
    return res
      .status(400)
      .json({ message: "Error al eliminar examen", error: error.message });
  }
});

//  ESTA LÍNEA ES CLAVE
module.exports = router;
