const Personagem = require("../models/personagemModel");

exports.listar = (req, res) => {

    Personagem.listar((erro, resultados) => {

        if (erro)
            return res.status(500).json(erro);

        res.json(resultados);

    });

};

exports.buscarPorId = (req, res) => {

    Personagem.buscarPorId(req.params.id, (erro, resultados) => {

        if (erro)
            return res.status(500).json(erro);

        if (resultados.length === 0)
            return res.status(404).json({
                mensagem: "Personagem não encontrado"
            });

        res.json(resultados[0]);

    });

};

exports.criar = (req, res) => {

    Personagem.criar(req.body, (erro, resultado) => {

        if (erro)
            return res.status(500).json(erro);

        res.status(201).json({
            mensagem: "Personagem criado",
            id: resultado.insertId
        });

    });

};

exports.atualizar = (req, res) => {

    Personagem.atualizar(
        req.params.id,
        req.body,
        (erro) => {

            if (erro)
                return res.status(500).json(erro);

            res.json({
                mensagem: "Personagem atualizado"
            });

        }
    );

};

exports.excluir = (req, res) => {

    Personagem.excluir(req.params.id, (erro) => {

        if (erro)
            return res.status(500).json(erro);

        res.json({
            mensagem: "Personagem removido"
        });

    });

};