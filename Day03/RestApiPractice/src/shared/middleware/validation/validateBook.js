import createError from 'http-errors';
import { bookSchema } from '../../validation/bookSchema.js';

const validateBook = (req, res, next) => {
	const { error } = bookSchema.validate(req.body, { abortEarly: false });
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

export { validateBook };
