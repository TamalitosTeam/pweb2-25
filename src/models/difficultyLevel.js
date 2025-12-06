// src/models/DifficultyLevel.js
const { Schema, model } = require("mongoose");

const DifficultyLevelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ["Básico", "Intermedio", "Avanzado"],
    },
    description: { type: String, trim: true },
    order: { type: Number, default: 1 }, // para ordenar en el front
  },
  { timestamps: true }
);

module.exports = model("DifficultyLevel", DifficultyLevelSchema);
