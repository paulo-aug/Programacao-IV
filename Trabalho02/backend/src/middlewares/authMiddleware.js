const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({
            mensagem: "Token não informado."
        });

    }

    const partes = authHeader.split(" ");

    if (partes.length !== 2) {

        return res.status(401).json({
            mensagem: "Token inválido."
        });

    }

    const [bearer, token] = partes;

    if (bearer !== "Bearer") {

        return res.status(401).json({
            mensagem: "Token inválido."
        });

    }

    jwt.verify(token, process.env.JWT_SECRET, (erro, usuario) => {

        if (erro) {

            return res.status(401).json({
                mensagem: "Token expirado ou inválido."
            });

        }

        req.usuario = usuario;

        next();

    });

}

module.exports = verificarToken;