var database = require("../database/config");


function buscarOmni(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(Vilão_idVilão) AS quantidadeLutas
        FROM Batalha
        WHERE Usuário_IdUsuário = ${idUsuario} AND Vilão_idVilão = 1;
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarConquista(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(Vilão_idVilão) AS quantidadeLutas
        FROM Batalha
        WHERE Usuário_IdUsuário = ${idUsuario} AND Vilão_idVilão = 2;
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarBattlebeast(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(Vilão_idVilão) AS quantidadeLutas
        FROM Batalha
        WHERE Usuário_IdUsuário = ${idUsuario} AND Vilão_idVilão = 3;
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAllen(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(Vilão_idVilão) AS quantidadeLutas
        FROM Batalha
        WHERE Usuário_IdUsuário = ${idUsuario} AND Vilão_idVilão = 5;
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMarkSinistro(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(Vilão_idVilão) AS quantidadeLutas
        FROM Batalha
        WHERE Usuário_IdUsuário = ${idUsuario} AND Vilão_idVilão = 4;
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarThragg(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(Vilão_idVilão) AS quantidadeLutas
        FROM Batalha
        WHERE Usuário_IdUsuário = ${idUsuario} AND Vilão_idVilão = 6;
    `;
    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarOmni,
    buscarConquista,
    buscarBattlebeast,
    buscarAllen,
    buscarMarkSinistro,
    buscarThragg
};
