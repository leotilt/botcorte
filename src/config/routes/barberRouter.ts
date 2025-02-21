// src/routes/barber.ts
import express from "express";
import { Barber } from "../../models/barber";

const router = express.Router();

router.post("/barbers", async (req, res) => {
  try {
    const barber = new Barber(req.body);
    await barber.save();
    res.status(201).json(barber);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar barbeiro" });
  }
});

router.get("/barbers", async (req, res) => {
  try {
    const barbers = await Barber.find();
    res.json(barbers);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar barbeiros" });
  }
});

export default router;
