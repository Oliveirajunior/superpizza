const { ClienteController } = require('../controllers/cliente.controller')
const express = require('express')
const ClienteRouter = express.Router()

ClienteRouter
  //listar
  .get('/', ClienteController.listar)
  //selecionar
  .get('/:id', ClienteController.selecionar)
  //alterar
  .put('/:id', ClienteController.alterar)
  //incluir
  .post('/', ClienteController.incluir)
  //excluir
  .delete('/:id', ClienteController.excluir)

module.exports = { ClienteRouter }
