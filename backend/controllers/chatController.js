import express from "express";
import { generateAIResponse } from "../services/aiServices.js";
import { personas } from "../data/personas.js";



//Fetch Gemini Response
export const handlePrompt = async (req, res) => {
  try {
    const { prompt, personaName } = req.body;
    if (!prompt || !personaName) {
      return res.status(404).json({ err: `You needed prompt and personaName` });
    }

    const persona = personas.find(
      (p) => p.name.toLowerCase() === personaName.toLowerCase()
    );

    if (!persona) {
      return res.status(404).json({ message: "persona not found" });
    }
    const finalPrompt = `your are ${persona.name}, a ${persona.role}. personality : ${persona.description}. stay in character(act as a person not like ai and plz dont add words like AI , Machines, Protocal.etc) while replying the user says :${prompt} `;

    const aiResponse = await generateAIResponse(finalPrompt);
    res.json({
      persona: persona.name,
      message: aiResponse,
    });
  } catch (err) {
    console.error("Error in HandlePrompt:",err.message)
    res.status(500).json({ error: err.message });
  }
};





