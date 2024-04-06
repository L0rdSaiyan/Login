const Sequelize = require("sequelize")
const sequelize = new Sequelize("usersData","root","victorsales19#",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(() => console.log("BANCO DE DADOS CONECTADO"))
.catch((error) => console.log(`ERRO AO SE CONECTAR: ${error}`) )


module.exports = {
    Sequelize : Sequelize,
    sequelize: sequelize
}