import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de coneção", erro);
})

conexao.once("open", () => {
    console.log("Coneção feita com sucesso");
    
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  });
  

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
});

app.get("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.put("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros.splice(index, 1)
    res.status(200).send("Livro deletado")
})

export default app;

