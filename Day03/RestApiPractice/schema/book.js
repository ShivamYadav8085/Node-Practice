import Joi from 'joi'

const bookSchema = Joi.object({
    author:Joi.string().required(),
    title:Joi.string().required()
})

export {bookSchema}