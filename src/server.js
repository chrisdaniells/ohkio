'use strict';

// Module Imports
import express from 'express';
import mongoose from 'mongoose';
import * as mongodb from './models/mongodb.js';

let app = express();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};
app.use(allowCrossDomain);

// Datbase Connect
mongoose.Promise = global.Promise;
//mongodb.mongoConnect(mongoose);

// Controller Imports
require('./controllers/exampleController.js')(app);
require('./controllers/cartel/productController.js')(app);
require('./controllers/default.js')(app);

app.listen(3001, function() {
	console.log('Listening on Port 3001');
});
