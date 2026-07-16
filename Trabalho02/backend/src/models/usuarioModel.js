const db = require("../database/db");

const Usuario = {

    buscarPorEmail(email, callback) {

        db.query(
            "SELECT * FROM usuarios WHERE email = ?",
            [email],
            callback
        );

    },

    criar(usuario, callback) {

        const sql = `
            INSERT INTO usuarios
            (nome, email, senha)
            VALUES (?, ?, ?)
        `;

        db.query(
            sql,
            [
                usuario.nome,
                usuario.email,
                usuario.senha
            ],
            callback
        );

    }

};

module.exports = Usuario;