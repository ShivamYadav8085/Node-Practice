import createError from 'http-errors';

import { userRegisterSchema } from '../../validation/userRegisterSchema.js';

const validateUserRegister = (req, res, next) => {
	const { error } = userRegisterSchema.validate(req.body);
	if (error) {
		const { details } = error;
		const message = details
			.map((errorDetail) => errorDetail.message.replace(/['"]/g, ''))
			.join(',');
		next(createError(422, message));
	} else {
		next();
	}
};
export { validateUserRegister };
