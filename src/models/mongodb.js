import oscar from '../oscar.config.js';
import mongoose from 'mongoose';

let mongoConnect = (mongoose) => {
	mongoose.connect(oscar.mongodb.hostname);
	let mongodb = mongoose.connection;

	mongodb.on('error', console.error.bind(console, 'Mongodb Connection Error '));
	mongodb.once('open', function() {
		console.log('Mongodb Connected Successfully');
	});
};

export { mongoConnect };