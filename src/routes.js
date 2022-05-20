const express = require('express')
const routes = express.Router()

const videoController = require('../controllers/videoController')
const videoMiddleware = require('../src/middlewares/videoMiddleware')

routes.get('/videos', videoController.index)
routes.post('/videos', videoController.store)

routes.put('/videos/:id', videoMiddleware.valiidateID, videoController.update)
routes.delete('/videos/:id', videoMiddleware.valiidateID, videoController.delete)

routes.patch('/videos/:id', videoMiddleware.valiidateID, videoController.updateLike)

module.exports = routes