var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.get("/total/:idUsuario", function (req, res) {
    desempenhoController.desempenhoJogador(req, res);
});

module.exports = router;