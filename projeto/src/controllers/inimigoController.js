var inimigoModel = require("../models/inimigoModel");

function buscarOmni(req, res) {
    var idUsuario = req.params.idUsuario;
console.log("aa")
    inimigoModel.buscarOmni(idUsuario)
    
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais (Omni):", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarConquista(req, res) {
    var idUsuario = req.params.idUsuario;

    inimigoModel.buscarConquista(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais (Conquista):", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarBattlebeast(req, res) {
    var idUsuario = req.params.idUsuario;

    inimigoModel.buscarBattlebeast(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais (Battle Beast):", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarAllen(req, res) {
    var idUsuario = req.params.idUsuario;

    inimigoModel.buscarAllen(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais (Allen):", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarMarkSinistro(req, res) {
    var idUsuario = req.params.idUsuario;

    inimigoModel.buscarMarkSinistro(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais (Mark Sinistro):", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarThragg(req, res) {
    var idUsuario = req.params.idUsuario;

    inimigoModel.buscarThragg(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log("\nErro ao pegar estatísticas gerais (Thragg):", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {

    buscarOmni,
    buscarConquista,
    buscarBattlebeast,
    buscarAllen,
    buscarMarkSinistro,
    buscarThragg
};