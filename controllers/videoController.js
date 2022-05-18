const { response } = require('express')
const res = require('express')
const Video = require('../src/models/video')

module.exports = {
    async index(req, res) {
        try {
            const videos = await Video.find()
            return response.status(200).json({ videos })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }
}