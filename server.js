    const express = require('express')
    const nunjucks = require('nunjucks')
    

    const server = express()
    const recipes = require('./data')

    server.use(express.static('public'))

    server.set('view engine', 'njk')

    nunjucks.configure('views', {
        express: server,
        autoescape: false,
        noCache: true
    })

    server.listen(3000, function(){
        console.log('server is running')
    })

//Rotas
    server.get('/', function(req, res){
        return res.render('index', {recipes: recipes})
    })

    server.get('/receitas', function(req, res){
        return res.render('receitas', {recipes: recipes})
    })

    server.get('/sobre', function(req, res){
        return res.render('sobre')
    })

    server.get('/recipes', function(req, res){
        return res.render('recipes', {recipes: recipes})
    })

    server.get('/recipes/:index', function(req, res){
        const recipeIndex = req.params.index

        return res.render('recipes', {recipes: recipes[recipeIndex]})
    })