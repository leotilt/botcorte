import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import barberRoutes from "./config/routes/barberRouter";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", barberRoutes);
// Conectar ao MongoDB
connectDB();

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API Barbearia funcionando!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
