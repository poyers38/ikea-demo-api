const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const mongoose = require('mongoose');

//password-1234!@#$
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/products', productRoutes);
/*
mongoose.connect('mongodb://admin:password-1234@cluster0-shard-00-00-kbisd.mongodb.net:27017,cluster0-shard-00-01-kbisd.mongodb.net:27017,cluster0-shard-00-02-kbisd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');

mongoose.connect('mongodb://admin:password-1234@cluster0-kbisd.mongodb.net/test?retryWrites=true', {
	
*/

mongoose.connect('mongodb://admin:A0dcOEq2aYryYjaz@ikea-demo-cluster-shard-00-00-3doog.mongodb.net:27017,ikea-demo-cluster-shard-00-01-3doog.mongodb.net:27017,ikea-demo-cluster-shard-00-02-3doog.mongodb.net:27017/test?ssl=true&replicaSet=ikea-demo-cluster-shard-0&authSource=admin&retryWrites=true', {
	useNewUrlParser: true
});



app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	})
});

module.exports = app;

