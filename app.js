const express = require("express")
const app = express()
const post = require("./models/post")
const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}))

const bodyParser = require("body-parser")
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Não foi possível cadastrar os dados: " + erro)
    })
})

app.get("/consulta", function(req, res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        res.send("Não foi possível consultar os dados: " + erro)
    })
})

app.get("/editar/:id", function(req, res){
    post.findAll({where: {'id': req.params.id}})
    .then(function(post){
        res.render("editar", {post})
    }).catch(function(erro){
        res.send("Não foi possível editar os dados: " + erro)
    })
})

app.post("/atualizar", function(req, res){
    post.update({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado
    }, 
    {where: {id: req.body.id}}).
    then(function(){
        res.redirect("/consulta")
    }).catch(function(erro){
        res.send("Não foi possível atualizar os dados: " + erro)
    })
})

app.get("/excluir/:id", function(req, res){
    post.destroy({where: {'id': req.params.id}
    }).then(function(){
        res.redirect("/consulta")
    }).catch(function(erro){
        console.log("Não foi possível excluir os dados: " + erro)
    })
})