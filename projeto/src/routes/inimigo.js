var express = require("express");
var router = express.Router();

var inimigoController = require("../controllers/inimigoController");
router.get("/omni/:idUsuario", function (req, res) {
    inimigoController.buscarOmni(req, res);
});

router.get("/conquista/:idUsuario", function (req, res) {
    inimigoController.buscarConquista(req, res);
});

router.get("/battlebeast/:idUsuario", function (req, res) {
    inimigoController.buscarBattlebeast(req, res);
});

router.get("/allen/:idUsuario", function (req, res) {
    inimigoController.buscarAllen(req, res);
});

router.get("/marksinistro/:idUsuario", function (req, res) {
    inimigoController.buscarMarkSinistro(req, res);
});

router.get("/thragg/:idUsuario", function (req, res) {
    inimigoController.buscarThragg(req, res);
});

module.exports = router;