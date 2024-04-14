const express = require("express")
const server = express()
const user = require("../models/users.js")
const cors = require("cors");
const Postagens = require("../models/posts.js");

server.use(express.json());
//Configuração para poder fazer requisições sem dar b.o
server.use(cors())

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

server.get("/postagens", async (req,res) =>
{
    Postagens.findAll().then(function(postagens){
        res.send({postagens: postagens})
    })
})

server.post("/postagemcriada", async (req,res) =>
{
    const {titulo, conteudo} = req.body
    try{
        await Postagens.create({titulo,conteudo})
        res.send("Postagem criada com sucesso!")
    }catch(error)
    {
        console.log(`Erro ao criar a postagem: ${error}`)
        res.status(500).send("Erro ao criar postagem")
    }
})

server.get("/listusers", async (req,res) => 
{
    user.findAll().then(function(users){
        res.send({users: users})
    })
})

server.listen(8081)