const { Pedido } = require('../models')

module.exports = {
  async listar(req, res) {
    try {
      const resultado = await Pedido.findAll({ order: [['id', 'ASC']] })
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
      const { cliente_id, total } = req.body
      await Pedido.update({ cliente_id, total }, { where: { id } })
      return res.json({ msg: 'Cadastro alterdo com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async incluir(req, res) {
    try {
      const { cliente_id, total } = req.body
      await Pedido.create({ cliente_id, total })
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
