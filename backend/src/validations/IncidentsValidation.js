const {celebrate,Joi,Segments} = require('celebrate')

module.exports = {
    create:celebrate({
        [Segments.BODY]:Joi.object().keys({
            title:Joi.string().required(),
            description:Joi.string().required(),
            value:Joi.number().required().min(1)
        }),
        [Segments.HEADERS]:Joi.object().keys({
            authorization:Joi.string().required()
        }).unknown()
    }),
    index:celebrate({
        [Segments.QUERY]:Joi.object().keys({
            page:Joi.number()
        })
    }),
    delete:celebrate({
        [Segments.PARAMS]: Joi.object({
            id:Joi.number().required()
        })
    })
}