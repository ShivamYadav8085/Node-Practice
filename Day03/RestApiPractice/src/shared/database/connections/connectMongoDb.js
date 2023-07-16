import { connect } from 'mongoose';
import { logger } from '../../logger/index.js';
const connectMongoDb = async () => {
	try {
		connect('mongodb://0.0.0.0:27017/bookAPI');

		logger.log({
			level:'info',
			message:'MongoDB Connected'
		})
	} catch (error) {
		throw error;
	}
};

export { connectMongoDb };
