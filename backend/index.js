const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const { PizzaRouter } = require('./routes/pizza.routes')
const { ClienteRouter } = require('./routes/cliente.routes')
const { PedidoRouter } = require('./routes/pedido.routes')
const { SelecaoRouter } = require('./routes/selecao.routes')

//.env
dotenv.config()

//middelwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/pizzas', PizzaRouter)
app.use('/clientes', ClienteRouter)
app.use('/pedidos', PedidoRouter)
app.use('/selecoes', SelecaoRouter)

//PORT
const PORT = process.env.PORT || 8000
const msg = `O servidor está on-line e rodando na porta ${PORT}`

app.listen(PORT, () => console.log(msg))
