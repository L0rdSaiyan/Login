const db = require("./db.js")

const Users = db.sequelize.define("users",
{
    name: 
    {
        type: db.Sequelize.STRING
    },
    senha:
    {
       type:  db.Sequelize.STRING
    }   
})

// Users.sync({force:true}).then(() => console.log('conexão realizada com sucesso'))
// .catch((error) => console.log(`error: ${error}`))

module.exports = Users