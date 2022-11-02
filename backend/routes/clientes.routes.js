const express = require('express')
const route = express.Router()

const clientesControllers = require('../controllers/clientes.controllers')

//listar
route.get('/', clientesControllers.listar)

//selecionar
route.get('/:id', clientesControllers.selecionar)

//alterar
route.put('/:id', clientesControllers.alterar)

//incluir
route.post('/', clientesControllers.incluir)

//excluir
route.delete('/:id', clientesControllers.excluir)

module.exports = route
