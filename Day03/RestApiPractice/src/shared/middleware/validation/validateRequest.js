import createError from 'http-errors';

const validateRequest =(schema)=> (req, res, next) => {
	const { error } = schema.validate(req.body, { abortEarly: false });
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

export { validateRequest };
