const express = require('express')
const route = express.Router()

const selecoesControllers = require('../controllers/selecoes.controllers')

//listar
route.get('/', selecoesControllers.listar)

//selecionar
route.get('/:id', selecoesControllers.selecionar)

//alterar
route.put('/:id', selecoesControllers.alterar)

//incluir
route.post('/', selecoesControllers.incluir)

//excluir
route.delete('/:id', selecoesControllers.excluir)

module.exports = route
