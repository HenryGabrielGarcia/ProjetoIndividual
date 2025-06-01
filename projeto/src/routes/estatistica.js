var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.get("/total/:idUsuario", function (req, res) {
    estatisticaController.estatisticasGerais(req, res);
})

router.get("/vitoria/:idUsuario", function (req, res) { 
    estatisticaController.vitoria(req, res);
})

router.get("/derrota/:idUsuario", function (req, res) {
    estatisticaController.derrota(req, res);
})

router.get("/taxa/:idUsuario", function (req, res) {
    estatisticaController.taxa(req, res);
})

router.get("/resultados/:idUsuario", function (req, res) {
    estatisticaController.resultados(req, res);
})


module.exports = router;