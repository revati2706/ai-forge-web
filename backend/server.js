import express from "express";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";
import personaRoutes from "./routes/personaRoutes.js"; // ✅ fixed import

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("server is running...........");
});

app.use("/chat", chatRoutes);
app.use("/personas", personaRoutes); // ✅ use correct route path

app.listen(PORT, () => {
  console.log(`✅ running on http://localhost:${PORT}`);
});

