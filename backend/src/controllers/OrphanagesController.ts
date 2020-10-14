import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'
import { Request, Response } from 'express'
import orphanageView from '../views/orphanage_views'

export default {
    async index (req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })

        return res.json(orphanages)
    },

    async show (req: Request, res: Response) {
        const { id } = req.params

        const orphanagesRepository = getRepository(Orphanage)
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return res.json(orphanageView.render(orphanage))
    },

    async create(req: Request, res: Response) {
        const {
            name, 
            latitude, 
            longitude, 
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body

        const requestImages = req.files as Express.Multer.File[]
        const images = requestImages.map(image => { return { path: image.filename } })
    
        const orphanagesRepository = getRepository(Orphanage)
        const orphanage = orphanagesRepository.create({
            name, 
            latitude, 
            longitude, 
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        })
    
        await orphanagesRepository.save(orphanage)
    
        return res.status(201).json(orphanage)
    }
}