// pegando as configurações do knexfile.js
const config = require("../../../knexfile");
// importando o knex em si para esse arquivo
const knex = require("knex");
// criar a coneção, dizendo que é uma coneção knex, quais as configurações de coneção, dentro do config tem as config de dev
const connection = knex(config.development)


// caso seja preciso usar esses arquivos e outra parte do projeto
module.exports = connection