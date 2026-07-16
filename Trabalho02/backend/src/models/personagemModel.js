const db = require("../database/db");

const Personagem = {

    listar(callback) {
        db.query(
            "SELECT * FROM personagens ORDER BY ordem",
            callback
        );
    },

    buscarPorId(id, callback) {
        db.query(
            "SELECT * FROM personagens WHERE id = ?",
            [id],
            callback
        );
    },

    criar(personagem, callback) {

        const sql = `
            INSERT INTO personagens
            (titulo, conteudo, imagem, ordem)
            VALUES (?, ?, ?, ?)
        `;

        db.query(sql,
            [
                personagem.titulo,
                personagem.conteudo,
                personagem.imagem,
                personagem.ordem
            ],
            callback
        );
    },

    atualizar(id, personagem, callback) {

        const sql = `
            UPDATE personagens
            SET
                titulo = ?,
                conteudo = ?,
                imagem = ?,
                ordem = ?
            WHERE id = ?
        `;

        db.query(sql,
            [
                personagem.titulo,
                personagem.conteudo,
                personagem.imagem,
                personagem.ordem,
                id
            ],
            callback
        );
    },

    excluir(id, callback) {

        db.query(
            "DELETE FROM personagens WHERE id = ?",
            [id],
            callback
        );

    }

};

module.exports = Personagem;