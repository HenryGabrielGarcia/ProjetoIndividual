var database = require("../database/config")

function verificarFimDoJogo(ganhoVar,idUsuario,idVilão) {
    var instrucao = `
        INSERT INTO Batalha (Usuário_IdUsuário,Vilão_idVilão,ganhos) VALUES (${idUsuario},${idVilão},${ganhoVar});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function BuscarPontuacao(idUsuario){
    var instrucao = `
        select date_format(dataBatalha, '%Y%m%d') as Data, ganhos
        from Quiz
        where fkUsuario = ${idUsuario}
        order by dataBatalha desc
        limit 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    verificarFimDoJogo,
    BuscarPontuacao
};