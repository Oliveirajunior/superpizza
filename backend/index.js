const express = require('express')
const app = express()
const pizzasRouter = require('./routes/pizzas.routes')

//middelwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/pizzas', pizzasRouter)

app.listen(3000, () => console.log('O servidor está on-line!'))
