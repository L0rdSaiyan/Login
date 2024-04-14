const db = require("./db.js")

const Postagens = db.sequelize.define("postagens",{

    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.STRING
    }

})

// Postagens.sync({force:true})

module.exports = Postagens