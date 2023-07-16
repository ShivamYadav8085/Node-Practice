import Joi from 'joi';
import { userCommonSchema } from './userCommonSchema.js';

const userRegisterSchema = userCommonSchema.keys({
	name: Joi.string().required().messages({
		'string.empty': 'Name is required',
		'any.required': 'Name is required',
	}),
});
export { userRegisterSchema };
