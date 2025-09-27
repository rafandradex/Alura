import express from "express";
import LivrosController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivrosController.listarLivros);
routes.get("/livros/buscar", LivrosController.listarLivrosPorEditoras);
routes.get("/livros/:id", LivrosController.listarlivroPorId);
routes.post("/livros", LivrosController.cadastrarLivro);
routes.put("/livros/:id", LivrosController.atualizarLivroPorId);
routes.delete("/livros/:id", LivrosController.deletarLivroPorId)

export default routes;