    const express = require('express')
    const nunjucks = require('nunjucks')

    const server = express()
    const recipes = require('./data')

    server.use(express.static('public'))

    server.set('view engine', 'njk')

    nunjucks.configure('views', {
        express: server
    })

    server.listen(3000, function(){
        console.log('server is running')
    })

//Rotas
    server.get('/', function(req, res){
        return res.render('index', {items: recipes})
    })

    server.get('/receitas', function(req, res){
        return res.render('receitas', {items: recipes})
    })

    server.get('/sobre', function(req, res){
        return res.render('sobre')
    })

    server.get('/recipes', function(req, res){
        return res.render('recipes')
    })