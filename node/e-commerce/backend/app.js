// Gets enviroment variables
require('dotenv/config');
const api = process.env.API_URL;

// Importing
const express = require('express');
const {json} = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

// Creates app
const app = express();

// Enables CORS
app.use(cors());
app.options('*', cors());

// Middleware
app.use(json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.use(errorHandler);

// Routes
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);

// home page
app.get(`${api}/`, (req, res) => {
	res.send('Welcome to the API');
});

// Connects to mongo cloud
mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Database connection was made successfully');
	})
	.catch((err) => {
		console.log(err);
	});

// Creates the server
app.listen(8080, () => {
	console.log(`API is running http://localhost:8080${api}`);
});
