const { Pedido, Pizza, Cliente } = require('../models')

module.exports = {
  async listar(req, res) {
    try {
      const resultado = await Pedido.findAll({
        order: [['id', 'ASC']],
        include: [
          { model: Pizza, as: 'pizza' },
          { model: Cliente, as: 'cliente' }
        ]
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
      const { cliente_id, pizza_id, quantidade, total } = req.body
      await Pedido.update(
        { cliente_id, pizza_id, quantidade, total },
        { where: { id } }
      )
      return res.json({ msg: 'Cadastro alterdo com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async incluir(req, res) {
    try {
      const { cliente_id, pizza_id, quantidade } = req.body
      //Cálculo total
      const id = pizza_id
      const resultado = await Pizza.findByPk(id)
      const total = resultado.preco * quantidade

      await Pedido.create({ cliente_id, pizza_id, quantidade, total })
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
