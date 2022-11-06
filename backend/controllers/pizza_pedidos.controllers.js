const { Pizza_pedido } = require('../models')

module.exports = {
  async listar(req, res) {
    try {
      const resultado = await Pizza_pedido.findAll({ order: [['id', 'ASC']] })
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  async selecionar(req, res) {
    try {
      const { id } = req.params
      const resultado = await Pizza_pedido.findByPk(id)
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  async alterar(req, res) {
    try {
      const { id } = req.params
      const { pedido_id, pizza_id, quantidade, subtotal } = req.body
      await Pizza_pedido.update(
        { pedido_id, pizza_id, quantidade, subtotal },
        { where: { id } }
      )
      return res.json({ msg: 'Cadastro alterdo com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async incluir(req, res) {
    try {
      const { pedido_id, pizza_id, quantidade, subtotal } = req.body
      await Pizza_pedido.create({ pedido_id, pizza_id, quantidade, subtotal })
      return res.json({ msg: 'Cadastro incluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params
      await Pizza_pedido.destroy({ where: { id } })
      return res.json({ msg: 'Cadastro excluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  }
}
