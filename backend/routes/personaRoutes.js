// routes/personaRoutes.js
import express from "express";
import { personas } from "../data/personas.js";

const router = express.Router();

// GET all personas
router.get("/", (req, res) => {
  res.json(personas);
});

// POST add new persona
router.post("/", (req, res) => {
  const newPersona = { id: Date.now(), ...req.body };
  personas.push(newPersona);
  res.json(newPersona);
});

export default router;
