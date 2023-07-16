import Joi from 'joi';

const bookSchema = Joi.object({
	author: Joi.string().required().messages({
		'string.empty': 'Author is required',
		'any.required': 'Author is required',
	}),
	title: Joi.string().required().messages({
		'string.empty': 'Title is required',
		'any.required': 'Title is required',
	}),
	country: Joi.string(),
	imageLink: Joi.string(),
	language: Joi.string(),
	link: Joi.string(),
	pages: Joi.number().messages({
		'number.base': 'Pages must be a number',
	}),
	year: Joi.number().messages({
		'number.base': 'Year must be a number',
	}),
}).unknown(true);

export { bookSchema };
