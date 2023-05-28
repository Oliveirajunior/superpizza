const { PedidoController } = require('../controllers/pedido.controller')
const express = require('express')
const PedidoRouter = express.Router()

PedidoRouter
  //listar
  .get('/', PedidoController.listar)
  //selecionar
  .get('/:id', PedidoController.selecionar)
  //alterar
  .put('/:id', PedidoController.alterar)
  //incluir
  .post('/', PedidoController.incluir)
  //excluir
  .delete('/:id', PedidoController.excluir)

module.exports = { PedidoRouter }
