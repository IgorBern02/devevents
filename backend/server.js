const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "Dados do servidor",
    timestamp: new Date(),
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
