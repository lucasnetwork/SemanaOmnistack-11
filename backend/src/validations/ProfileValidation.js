const {celebrate,Joi,Segments} = require('celebrate')

module.exports = {
    index:celebrate({
        [Segments.HEADERS]:Joi.object().keys({
            authorization:Joi.string().required(),
        }).unknown()
    })
}