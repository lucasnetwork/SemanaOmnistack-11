const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const {celebrate,Segments,Joi} = require('celebrate')


routes.post('/sessions',SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email: Joi.string().required().email(),
        whatsaap:Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)
    })
}),OngController.create)

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object().keys({
        authorization:Joi.string().required(),
    }).unknown()
}),ProfileController.index)

routes.post('/incidents',celebrate({
    [Segments.BODY]:Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        value:Joi.number().required().min(1)
    }),
    [Segments.HEADERS]:Joi.object().keys({
        authorization:Joi.string().required()
    })
}), IncidentController.create)
routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}), IncidentController.index)
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object({
        id:Joi.number().required()
    })
}), IncidentController.delete)
module.exports = routes