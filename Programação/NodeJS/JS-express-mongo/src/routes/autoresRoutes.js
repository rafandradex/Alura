import express from "express";
import AutoresController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutoresController.listarAutores);
routes.post("/autores", AutoresController.cadastrarAutor);
routes.get("/autores/:id", AutoresController.listarAutorPorId);
routes.put("/autores/:id", AutoresController.atualizarAutorPorId);
routes.delete("/autores/:id", AutoresController.deletarAutorPorId)

export default routes;