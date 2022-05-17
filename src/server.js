const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://MatheusSBS:Disquete123@cluster0.stho2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('conected to the database!'))

const app = express()
const port = 3003

app.use(routes)

app.listen(port, () => {
    console.log(`backend started at http:/localhost:${port}`)
})