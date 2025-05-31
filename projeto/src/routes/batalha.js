var express = require("express");
var router = express.Router();

var batalhaController = require("../controllers/batalhaController");

router.post("/verificarFimDoJogo", function (req, res) {
    
    batalhaController.verificarFimDoJogo(req, res);
});

router.get("/historico/:idUsuario", function (req, res) {
    pontuacaoController.buscarPontuacao(req, res);
});

module.exports = router;