import express from "express";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";
import personaRoutes from "./routes/personaRoutes.js";

const app = express();

app.use(cors({
  origin: ["https://ai-forge-web-frontend.vercel.app/"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...........");
});

app.use("/chat", chatRoutes);
app.use("/personas", personaRoutes);


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;


