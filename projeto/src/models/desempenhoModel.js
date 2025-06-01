var database = require("../database/config");


function desempenhoJogador(idUsuario) {
    var instrucaoSql = `
       SELECT 
    COUNT(idBatalha) AS batalhasAnteriores
FROM 
    Batalha
WHERE 
    Usuário_IdUsuário = ${idUsuario};


    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
desempenhoJogador
}