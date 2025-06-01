var batalhaModel = require("../models/batalhaModel");


function verificarFimDoJogo(req, res) {
      var ganhoVar = req.body.ganhoServer;
      var idUsuario = req.body.idUsuario;
      var idVilão = req.body.idVilãoServer;
    console.log(ganhoVar)
    if (ganhoVar == undefined) {
        res.status(400).send("Sua rodada está undefined!");
    }

    batalhaModel.verificarFimDoJogo(ganhoVar,idUsuario,idVilão).then(function(resposta){
        res.status(200).send("Rodada criada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    verificarFimDoJogo
}