const { Selecao, Pedido, Pizza } = require('../models')

module.exports = {
  async listar(req, res) {
    try {
      const resultado = await Selecao.findAll({
        order: [['id', 'ASC']],
        include: [
          { model: Pedido, as: 'pedido' },
          { model: Pizza, as: 'pizza' }
        ]
      })
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  /* async selecionar(req, res) {
    try {
      const { id } = req.params
      const resultado = await Selecao.findByPk(id)
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  }, */
  //LISTAR POR ID_PEDIDO
  async selecionar(req, res) {
    try {
      const { id } = req.params
      const resultado = await Selecao.findAll(
        { where: { id_pedido: id } },
        {
          order: [['id', 'ASC']],
          include: [
            { model: Pedido, as: 'pedido' },
            { model: Pizza, as: 'pizza' }
          ]
        }
      )
      return res.json(resultado)
    } catch (error) {
      console.error(error.message)
    }
  },
  /* async alterar(req, res) {
    try {
      const { id, id_pedido } = req.params
      const { id_pizza, quantidade, subtotal } = req.body
      await Selecao.update(
        { id_pizza, id_pedido, quantidade, subtotal },
        { where: { id } }
      )
      return res.json({ msg: 'Cadastro alterdo com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  }, */
  async incluir(req, res) {
    try {
      const { id_pizza, id_pedido, quantidade } = req.body
      //Cálculo subtotal
      const id = id_pizza
      const pizza = await Pizza.findByPk(id)
      const subtotal = pizza.preco * quantidade

      await Selecao.create({ id_pizza, id_pedido, quantidade, subtotal })
      return res.json({ msg: 'Cadastro incluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params
      await Selecao.destroy({ where: { id } })
      return res.json({ msg: 'Cadastro excluído com sucesso!' })
    } catch (error) {
      console.error(error.message)
    }
  }
}
