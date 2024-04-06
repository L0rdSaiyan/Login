const express = require("express")
const server = express()
const user = require("../models/users.js")

server.use(express.json());
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


server.post("/cadastrorealizado", async (req, res) => {
    const { name, senha } = req.body;
    try {
        await user.create({ name, senha });
        res.send("cadastro feito");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao cadastrar usuário");
    }
});

server.get("/listusers", async  (req,res) => 
{
    user.findAll().then(function(users){
        res.send({users: users})
    })
})

server.listen(8081)