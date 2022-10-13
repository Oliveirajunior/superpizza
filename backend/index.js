const express = require('express')
const app = express()
const cors = require('cors')
const pizzasRouter = require('./routes/pizzas.routes')

//middelwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/pizzas', pizzasRouter)

app.listen(3000, () => console.log('O servidor está on-line!'))
