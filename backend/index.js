const express = require('express')
const app = express()

const { Pizza } = require('./models')

//middelwares
app.use(express.json())

//routers
app.get('/home', (req, res) => {
  res.send('Página de Teste!')
})

//listar
app.get('/pizzas', async (req, res) => {
  try {
    const resultado = await Pizza.findAll({ order: [['id', 'ASC']] })
    return res.json(resultado)
  } catch (error) {
    console.error(error.message)
  }
})

//selecionar
app.get('/pizzas/:id', async (req, res) => {
  try {
    const { id } = req.params
    const resultado = await Pizza.findByPk(id)
    return res.json(resultado)
  } catch (error) {
    console.error(error.message)
  }
})

//alterar
app.put('/pizzas/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { sabor, preco } = req.body
    await Pizza.update({ sabor, preco }, { where: { id } })
    return res.json({ msg: 'Cadastro alterdo com sucesso!' })
  } catch (error) {
    console.error(error.message)
  }
})

//incluir
app.post('/pizzas', async (req, res) => {
  try {
    const { sabor, preco } = req.body
    await Pizza.create({ sabor, preco })
    return res.json({ msg: 'Cadastro incluído com sucesso!' })
  } catch (error) {
    console.error(error.message)
  }
})

//excluir
app.delete('/pizzas/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Pizza.destroy({ where: { id } })
    return res.json({ msg: 'Cadastro excluído com sucesso!' })
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(3000, () => console.log('O servidor está on-line!'))
