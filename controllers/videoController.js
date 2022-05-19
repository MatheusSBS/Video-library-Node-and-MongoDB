const Video = require('../src/models/video')
const { response } = require('express')
const {v4: uuid} = require('uuid')

module.exports = {
    async index(request, response) {
        try {
            const videos = await Video.find()
            return response.status(200).json({ videos })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    },

    async store(request, response) {
        const { title, link } = request.body
        if ( !title || !link ) {
            return response.status(400).json({ error: "missing title or link."})
        }

        const video = new Video({
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
        
    },
    
    async update(request, response) {
        const { title, link } = request.body

        if (!title && !link) {
            return response.status(400).json({ error: 'You must inform a new title or a new link' })
        }

        if (title) response.video.title = title
        if (link) response.video.link = link

        try {
          await response.video.save()
          return response.status(200).json({ message: 'Video updated successfully' })

        } catch (err) {
            response.status(500).json({ error: err.message })
        }         
    }
}