// src/models/Exam.js
const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema(
  {
    text: { type: String, required: true },
    options: {
      type: [String], // arreglo de strings
      required: true
    },
    correctOptionIndex: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const ExamSchema = new Schema(
  {
    // Título del examen
    title: { type: String, required: true, trim: true },

    // Descripción opcional
    description: { type: String, trim: true },

    // Nivel de dificultad COMO TEXTO, no ObjectId
    // Ej: "Básico", "Intermedio", "Avanzado"
    difficultyLevel: {
      type: String,
      required: true
    },

    // Rango de edad COMO TEXTO, no ObjectId
    // Ej: "8-10", "11-14", "15-18"
    ageRange: {
      type: String,
      required: true
    },

    // Si quieres categoría, la dejamos opcional
    category: {
      type: String,
      required: false
    },

    // Preguntas del examen
    questions: {
      type: [QuestionSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Exam', ExamSchema);
