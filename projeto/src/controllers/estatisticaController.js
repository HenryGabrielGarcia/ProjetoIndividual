var estatisticaModel = require("../models/estatisticaModel");

function estatisticasGerais(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.estatisticasGerais(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function vitoria(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.vitoria(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar vitórias:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function derrota(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.derrota(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar derrotas:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function taxa(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.taxa(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar taxa de vitória:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    estatisticasGerais,
    vitoria,
    derrota,
    taxa
};
