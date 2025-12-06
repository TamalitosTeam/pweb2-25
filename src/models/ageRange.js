// src/models/AgeRange.js
const { Schema, model } = require("mongoose");

const AgeRangeSchema = new Schema(
  {
    label: { type: String, required: true, unique: true }, // "8-10 años"
    minAge: { type: Number, required: true },
    maxAge: { type: Number, required: true },
    description: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = model("AgeRange", AgeRangeSchema);
