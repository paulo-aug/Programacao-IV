const express = require("express");
const cors = require("cors");

const authRoutes =
require("./routes/authRoutes");

const personagemRoutes =
require("./routes/personagemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/personagens", personagemRoutes);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {

    res.json({
        mensagem: "API funcionando!"
    });

});

module.exports = app;