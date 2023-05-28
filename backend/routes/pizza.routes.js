const { PizzaController } = require('../controllers/pizza.controllers')
const express = require('express')
const PizzaRouter = express.Router()

PizzaRouter
  //listar
  .get('/', PizzaController.listar)
  //selecionar
  .get('/:id', PizzaController.selecionar)
  //alterar
  .put('/:id', PizzaController.alterar)
  //incluir
  .post('/', PizzaController.incluir)
  //excluir
  .delete('/:id', PizzaController.excluir)

module.exports = { PizzaRouter }
