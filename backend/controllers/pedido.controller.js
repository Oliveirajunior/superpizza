const { Pedido, Cliente, Selecao } = require('../models')

const PedidoController = {
  async listar(req, res) {
    try {
      const resultado = await Pedido.findAll({
        order: [['id', 'ASC']],
        include: [{ model: Cliente, as: 'cliente' }]
      })
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  async selecionar(req, res) {
    try {
      const { id } = req.params
      const resultado = await Pedido.findByPk(id)
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  async alterar(req, res) {
    try {
      const { id } = req.params
      //não será possível alterar o id_cliente e o total será atribuído aqui
      const res_selecao = await Selecao.findAll({
        where: { id_pedido: id }
      })
      const total = res_selecao.reduce((total, element) => {
        return (total += element.subtotal)
      }, 0)
      await Pedido.update({ total }, { where: { id } })
      return res.json({ msg: 'Cadastro alterdo com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async incluir(req, res) {
    try {
      const { id_cliente, total } = req.body
      //Cálculo total

      await Pedido.create({ id_cliente, total })
      return res.json({ msg: 'Cadastro incluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params
      await Pedido.destroy({ where: { id } })
      return res.json({ msg: 'Cadastro excluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = { PedidoController }
