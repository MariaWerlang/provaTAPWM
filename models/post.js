const banco = require("./banco")
const Agendamentos = banco.sequelize.define('agendamentos', {
    nome: {
        type: banco.Sequelize.STRING
    },
    endereco: {
        type: banco.Sequelize.STRING
    },
    bairro: {
        type: banco.Sequelize.STRING
    },
    cep: {
        type: banco.Sequelize.STRING
    },
    cidade: {
        type: banco.Sequelize.STRING
    },
    estado: {
        type: banco.Sequelize.STRING
    }
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos