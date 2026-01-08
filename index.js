import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Beflix backend activo");
});

app.listen(3000, () => {
  console.log("Servidor prendido");
});
