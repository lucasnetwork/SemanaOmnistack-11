const {celebrate,Joi,Segments} = require('celebrate')

module.exports = {
        create:celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().required(),
                email: Joi.string().required().email(),
                whatsaap:Joi.string().required().min(10).max(11),
                city:Joi.string().required(),
                uf:Joi.string().required().length(2)
        })
    })
}