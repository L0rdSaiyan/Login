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
        // Cria o usuário e obtém o objeto de usuário retornado pelo método create
        const newUser = await user.create({ name, senha });
        res.send({ name: newUser.name });
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error); // Log do erro para depuração
        res.status(500).send("Erro ao cadastrar usuário: " + error.message); // Adiciona o erro à resposta para depuração
    }
});

server.get("/login", async(req,res) =>
{
    const {username} = req.query
    const {userpass} = req.query

    try{
        const foundUser = await user.findOne({where: {name:username, senha: userpass}})
        if(foundUser)
        {
            res.status(200).send(foundUser)
        }
        else{
            res.status(404).send("Usuário não encontrado")
        }
    }
    catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).send("Erro ao buscar usuário");
    }
})

server.get("/postagens", async (req,res) =>
{
    Postagens.findAll().then(function(postagens){
        res.send({postagens: postagens})
    })
})

server.post("/postagemcriada", async (req,res) =>
{
    const { titulo, conteudo, name } = req.body; // Mudar para 'authorPost'
    try{
        await Postagens.create({ titulo, conteudo, authorPost: name }); // Mudar para 'authorPost'
        res.send("Postagem criada com sucesso!");
    } catch(error) {
        console.log(`Erro ao criar a postagem: ${error}`);
        res.status(500).send("Erro ao criar postagem");
    }
})


server.get("/listusers", async (req,res) => 
{
    user.findAll().then(function(users){
        res.send({users: users})
    })
})

server.listen(8081)