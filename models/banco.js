const Sequelize = require("sequelize")
const sequelize = new Sequelize("bd_handlebars", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = ({
    sequelize: sequelize,
    Sequelize: Sequelize
})
