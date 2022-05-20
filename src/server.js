require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')
const conectToDatabase = require('./database')
const cors = require('cors')

conectToDatabase()

const app = express()
const port = 3003

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`✅ backend started at http://localhost:${port}`)
})