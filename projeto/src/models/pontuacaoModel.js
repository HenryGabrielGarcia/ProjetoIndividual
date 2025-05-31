var database = require("../database/config");

function salvarpontuacao(pontuacao, fkUsuario) {
    var instrucao = `
        INSERT INTO Quiz (pontuacao, fkUsuario) VALUES ('${pontuacao}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function BuscarPontuacao(idUsuario){
    var instrucao = `
        select date_format(dataBatalha, '%Y%m%d') as Data, ganhos
        from Quiz
        where fkUsuario = ${idUsuario}
        order by data_jogada desc
        limit 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarpontuacao,
    BuscarPontuacao
};
