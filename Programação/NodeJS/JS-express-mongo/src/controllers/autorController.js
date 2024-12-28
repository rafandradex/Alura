import { autor } from "../models/Autor.js";

class AutoresController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao buscar autores`
            })
        }
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao buscar o id do Autor`
            })
        }
    };

    static async atualizarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: `Autor ${id} atualizado com sucesso`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao atualizar autor`
            })
        }



    };


    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso",
                autor: novoAutor
            })
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar autor`
            })
        }
    }

    static async deletarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: `Autor ${id} foi removido da Database`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao remover autor`
            })
        }



    };

};

export default AutoresController;