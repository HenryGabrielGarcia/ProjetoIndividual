var desempenhoModel = require("../models/desempenhoModel");

function desempenhoJogador(req, res) {
    var idUsuario = req.params.idUsuario; // CORRIGIDO

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
        return;
    }

    desempenhoModel.desempenhoJogador(idUsuario)
        .then(function(resposta) {
            res.status(200).json(resposta); // Envia a resposta real do model
        })
        .catch(function(erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    desempenhoJogador
};
