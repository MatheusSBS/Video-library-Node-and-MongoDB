const express = require('express')
const videoController = require('../controllers/videoController')
const routes = express.Router()

routes.get('/', (req, res) => res.send('Hello Word'))
routes.get('/videos', videoController.index)

module.exports = routes