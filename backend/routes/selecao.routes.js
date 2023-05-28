const { SelecaoController } = require('../controllers/selecao.controller')
const express = require('express')
const SelecaoRouter = express.Router()

SelecaoRouter
  //listar
  .get('/', SelecaoController.listar)
  //selecionar
  //.get('/:id', SelecaoController.selecionar)
  //alterar
  //.put('/:id', SelecaoController.alterar)
  //incluir
  .post('/', SelecaoController.incluir)
  //excluir
  .delete('/:id', SelecaoController.excluir)

module.exports = { SelecaoRouter }
