// src/routes/categories.routes.js
const express = require("express");
const Category = require("../models/category");

const router = express.Router();

// Crear categoría
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json(category);
  } catch (error) {
    console.error("Error al crear categoría:", error);
    return res
      .status(400)
      .json({ message: "Error al crear categoría", error: error.message });
  }
});

// Listar categorías
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    return res.json(categories);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return res
      .status(500)
      .json({ message: "Error al obtener categorías", error: error.message });
  }
});

// Obtener categoría por ID
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Categoría no encontrada" });
    return res.json(category);
  } catch (error) {
    return res.status(400).json({ message: "ID inválido" });
  }
});

// Actualizar categoría
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category)
      return res.status(404).json({ message: "Categoría no encontrada" });
    return res.json(category);
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    return res
      .status(400)
      .json({ message: "Error al actualizar categoría", error: error.message });
  }
});

// Eliminar categoría
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Categoría no encontrada" });
    return res.json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al eliminar categoría", error: error.message });
  }
});

module.exports = router;
