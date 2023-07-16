import { connect } from 'mongoose';
const connectMongoDb = async () => {
	try {
		connect('mongodb://0.0.0.0:27017/bookAPI');

		console.log('Mongodb connected');
	} catch (error) {
		throw error;
	}
};

export { connectMongoDb };
