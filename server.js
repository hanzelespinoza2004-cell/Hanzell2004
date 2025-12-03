import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Necesario para rutas en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta que se va a servir (public)
const publicPath = path.join(__dirname, "public");

// Usar carpeta pública
app.use(express.static(publicPath));

// Servir index.html por defecto
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
