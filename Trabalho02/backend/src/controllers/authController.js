const Usuario = require("../models/usuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

    const { nome, email, senha } = req.body;

    Usuario.buscarPorEmail(email, async (erro, resultado) => {

        if (erro)
            return res.status(500).json(erro);

        if (resultado.length > 0)
            return res.status(400).json({
                mensagem: "Email já cadastrado."
            });

        const senhaHash = await bcrypt.hash(senha, 10);

        Usuario.criar({

            nome,
            email,
            senha: senhaHash

        }, (erro) => {

            if (erro)
                return res.status(500).json(erro);

            res.status(201).json({
                mensagem: "Usuário cadastrado com sucesso."
            });

        });

    });

};

exports.login = (req, res) => {

    const { email, senha } = req.body;

    Usuario.buscarPorEmail(email, async (erro, resultado) => {

        if (erro)
            return res.status(500).json(erro);

        if (resultado.length === 0)
            return res.status(401).json({
                mensagem: "Usuário ou senha inválidos."
            });

        const usuario = resultado[0];

        const senhaValida =
            await bcrypt.compare(
                senha,
                usuario.senha
            );

        if (!senhaValida)
            return res.status(401).json({
                mensagem: "Usuário ou senha inválidos."
            });

        const token = jwt.sign(

            {
                id: usuario.id,
                email: usuario.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "2h"
            }

        );

        res.json({

            mensagem: "Login realizado.",

            token

        });

    });

};