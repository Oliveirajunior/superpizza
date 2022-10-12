const express = require('express')
const route = express.Router()

const pizzasControllers = require('../controllers/pizzas.controllers')

//listar
route.get('/', pizzasControllers.listar)

//selecionar
route.get('/:id', pizzasControllers.selecionar)

//alterar
route.put('/:id', pizzasControllers.alterar)

//incluir
route.post('/', pizzasControllers.incluir)

//excluir
route.delete('/:id', pizzasControllers.excluir)

module.exports = route
