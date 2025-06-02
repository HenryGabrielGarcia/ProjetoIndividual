var database = require("../database/config");

function estatisticasGerais(idUsuario) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
        SELECT 
            COUNT(idBatalha) AS totalPartidas
        FROM 
            Batalha
        JOIN 
            usuario ON Batalha.Usuário_IdUsuário = usuario.idUsuario
        WHERE 
            idUsuario = ${idUsuario};
    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function vitoria(idUsuario) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
        SELECT 
            COUNT(idBatalha) AS totalVitorias
        FROM 
            Batalha
        JOIN 
            usuario ON Batalha.Usuário_IdUsuário = usuario.idUsuario
        WHERE 
            idUsuario = ${idUsuario}
            AND Ganhos = 1;
    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function derrota(idUsuario) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
        SELECT 
            COUNT(idBatalha) AS totalDerrotas
        FROM 
            Batalha
        JOIN 
            usuario ON Batalha.Usuário_IdUsuário = usuario.idUsuario
        WHERE 
            idUsuario = ${idUsuario}
            AND Ganhos = 0;
    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function taxa(idUsuario) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
       SELECT 
    COUNT(*) AS totalPartidas,
    IFNULL(SUM(Ganhos), 0) AS totalVitorias,
    COUNT(*) - IFNULL(SUM(Ganhos), 0) AS totalDerrotas,
    IF(COUNT(*) = 0, 0, ROUND(IFNULL(SUM(Ganhos), 0) * 100.0 / COUNT(*), 2)) AS taxaVitoria
FROM 
    Batalha
WHERE 
    Usuário_IdUsuário = ${idUsuario};


    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function resultados(idUsuario) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
   SELECT 
            ROW_NUMBER() OVER (ORDER BY idBatalha) AS partida,
            Ganhos
        FROM 
            Batalha
        WHERE 
            Usuário_IdUsuário = ${idUsuario}
        ORDER BY 
            idBatalha ASC;


    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    estatisticasGerais,
    vitoria,
    derrota,
    taxa,
    resultados
};
