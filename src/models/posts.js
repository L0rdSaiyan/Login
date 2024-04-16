const db = require("./db.js");
const Users = require("./users.js");

const Postagens = db.sequelize.define("postagens", {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.STRING
    },
    authorPost: {
        type: db.Sequelize.STRING, // Define o tipo de dados da chave estrangeira como STRING
        references: {
            model: Users, // Define a tabela referenciada
            key: 'name' // Define a coluna referenciada na tabela 'users'
        }
    }
});

Postagens.sync({force:true})

module.exports = Postagens;
