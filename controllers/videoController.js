const { response } = require('express')
const {v4: uuid} = require('uuid')
const video = require('../src/models/video')

module.exports = {
    async index(request, response) {
        try {
            const videos = await video.find()
            return response.status(200).json({ video })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    },

    async store(request, response) {
        const { title, link } = request.body
        if ( !title || !link ) {
            return response.status(400).json({ error: "missing title or link."})
        }

        const video = new video({
            _id: uuid(),
            title,
            link,
            liked: false, 
        })
        try {
            await video.save()

            return response.status(201).json({ message: "Video added succesfuly!"})
        } catch (err) {
            response.status(400).json({ error: err.message })
        }
        
    }
}