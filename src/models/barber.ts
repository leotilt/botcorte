// src/models/Barber.ts
import mongoose from "mongoose";

const BarberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export const Barber = mongoose.model("Barber", BarberSchema);
