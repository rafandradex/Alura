import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";


class LivrosController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao buscar livros`
            })
        }
    };

    static async listarlivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao buscar o id do Livro`
            })
        }
    };

    static async atualizarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: `Livro ${id} atualizado com sucesso`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao atualizar livro`
            })
        }



    };


    static async cadastrarLivro(req, res) {
        const novolivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novolivro.autor)
            const livroCompleto = { ...novolivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({
                message: "Criado com sucesso",
                livro: livroCriado
            })
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar livro`
            })
        }
    }

    static async deletarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: `Livro ${id} foi removido da Database`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao remover livro`
            })
        }
    };

    static async listarLivrosPorEditoras(req, res) {
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora)
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na busca`
            })
        }
    }

};

export default LivrosController;