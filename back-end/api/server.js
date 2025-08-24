// API application programming interface
//  "type": "module" do package.json -> ES module (maneira nova de importações)
// POST, GET, PUT, DELETE - CRUD
// Endpoint - rota

import express, { request, response } from "express";
import cors from "cors";
import { db } from "./connect.js";

const PORT = 3000;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá, mundo! Alterei 3!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
