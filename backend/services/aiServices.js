import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAIResponse = async (prompt) => {
  
    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text()

 
};
