const express = require('express')

const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const OngsValidation = require('./validations/OngsValidation')
const IncidentsValidation = require('./validations/IncidentsValidation')
const SessionValidation = require('./validations/SessionValidation')
const ProfileValidation = require('./validations/ProfileValidation')

routes.post('/sessions',(SessionValidation.create),SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs',OngsValidation.create ,OngController.create)

routes.get('/profile',(ProfileValidation.index),ProfileController.index)

routes.post('/incidents',(IncidentsValidation.create), IncidentController.create)
routes.get('/incidents',(IncidentsValidation.index), IncidentController.index)
routes.delete('/incidents/:id',(IncidentsValidation.delete), IncidentController.delete)
module.exports = routes