const express = require('express')
const route = express.Router()

const pizza_pedidosControllers = require('../controllers/pizza_pedidos.controllers')

//listar
route.get('/', pizza_pedidosControllers.listar)

//selecionar
route.get('/:id', pizza_pedidosControllers.selecionar)

//alterar
route.put('/:id', pizza_pedidosControllers.alterar)

//incluir
route.post('/', pizza_pedidosControllers.incluir)

//excluir
route.delete('/:id', pizza_pedidosControllers.excluir)

module.exports = route
