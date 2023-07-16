import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import 'dotenv/config.js';
import _ from 'lodash';
import status from 'statuses';
import logger from 'morgan';

import { connectMongoDb } from './src/shared/database/connections/connectMongoDb.js';

import { router as bookRouter } from './src/routes/book.js';
import { router as userRouter } from './src/routes/user.js';
import { router as employeeRouter } from './src/routes/employee.js';

const app = express();

connectMongoDb();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use((req, res, next) => {
	const originalJson = res.json;
	res.json = (data) => {
		if (!data.error) {
			const formattedResponse = {
				status: status(res.statusCode),
				data: _.isArray(data)
					? [...data]
					: _.isObject(data)
					? [data]
					: [],
				error: null,
			};
			return originalJson.call(res, formattedResponse);
		}
		return originalJson.call(res, data);
	};
	next();
});

app.use('/books', bookRouter);
app.use('/user', userRouter);
app.use('/employee', employeeRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(err.status).json({
		status: status(res.statusCode),
		data: [],
		error: err.message,
	});
	next();
});

export { app };
