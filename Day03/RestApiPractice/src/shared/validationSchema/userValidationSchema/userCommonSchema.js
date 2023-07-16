import Joi from 'joi';

const userCommonSchema = Joi.object({
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.required()
		.messages({
			'string.email': 'Please provide a valid email address',
			'string.empty': 'Email is required',
			'any.required': 'Email is required',
		}),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
		'string.pattern.base':
			'Password must be alphanumeric and between 3 and 30 characters long',
		'string.empty': 'Password is required',
		'any.required': 'Password is required',
	}),
});
export { userCommonSchema };
