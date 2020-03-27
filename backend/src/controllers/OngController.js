const crypto = require('crypto')
const connection = require('../database/connection')
const generationuniqueId = require('../utils/generateUniqueId')
module.exports = {
    async index(req,res){
        const ongs = await connection('ongs').select('*')
    
        return res.json(ongs)
    },
    async create(req,res){
        const {name,email,whatsaap,city,uf} = req.body
        const id = generationuniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsaap,
            city,
            uf
        })

        return res.json({id})
    }
}