const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const pizzasRouter = require('./routes/pizzas.routes')
const clientesRouter = require('./routes/clientes.routes')
const pedidosRouter = require('./routes/pedidos.routes')
const selecoesRouter = require('./routes/selecoes.routes')

//.env
dotenv.config()

//middelwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/pizzas', pizzasRouter)
app.use('/clientes', clientesRouter)
app.use('/pedidos', pedidosRouter)
app.use('/selecoes', selecoesRouter)

//PORT
const PORT = process.env.PORT || 8000
const msg = `O servidor está on-line e rodando na porta ${PORT}`

app.listen(PORT, () => console.log(msg))
