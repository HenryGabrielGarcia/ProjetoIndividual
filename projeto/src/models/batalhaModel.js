var database = require("../database/config")

function verificarFimDoJogo(ganhoVar,idUsuario,idVilão) {
    var instrucao = `
        INSERT INTO Batalha (Usuário_IdUsuário,Vilão_idVilão,ganhos) VALUES (${idUsuario},${idVilão},${ganhoVar});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    verificarFimDoJogo
};