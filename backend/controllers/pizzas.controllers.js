const { Pizza } = require('../models')

module.exports = {
  async listar(req, res) {
    try {
      const resultado = await Pizza.findAll({ order: [['id', 'ASC']] })
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  async selecionar(req, res) {
    try {
      const { id } = req.params
      const resultado = await Pizza.findByPk(id)
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  async alterar(req, res) {
    try {
      const { id } = req.params
      const { sabor, preco } = req.body
      await Pizza.update({ sabor, preco }, { where: { id } })
      return res.json({ msg: 'Cadastro alterdo com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async incluir(req, res) {
    try {
      const { sabor, preco } = req.body
      await Pizza.create({ sabor, preco })
      return res.json({ msg: 'Cadastro incluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params
      await Pizza.destroy({ where: { id } })
      return res.json({ msg: 'Cadastro excluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  }
}
