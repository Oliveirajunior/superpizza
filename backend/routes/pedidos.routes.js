const express = require('express')
const route = express.Router()

const pedidosControllers = require('../controllers/pedidos.controllers')

//listar
route.get('/', pedidosControllers.listar)

//selecionar
route.get('/:id', pedidosControllers.selecionar)

//alterar
route.put('/:id', pedidosControllers.alterar)

//incluir
route.post('/', pedidosControllers.incluir)

//excluir
route.delete('/:id', pedidosControllers.excluir)

module.exports = route
