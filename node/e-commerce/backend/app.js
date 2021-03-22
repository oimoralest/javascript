const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Getting enviroment variables
require('dotenv/config');
const api = process.env.API_URL;

// Schemas
const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
	},
});

// Models
const Product = mongoose.model('Product', productSchema);

// home page
app.get(`${api}/`, (req, res) => {
	res.send('Welcome to the API');
});

// products
// GET
app.get(`${api}/products`, async (req, res) => {
	const productList = await Product.find();
	if (!productList) {
		res.status(500).json({
			success: false,
		});
	}
	res.send(productList);
});
// POST
app.post(`${api}/products`, (req, res) => {
	const newProduct = new Product({
		name: req.body.name,
		image: req.body.image,
		countInStock: req.body.countInStock,
	});
	newProduct
		.save()
		.then((createdProduct) => {
			res.status(201).json(createdProduct);
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
				success: false,
			});
		});
});

// Connects to mongo cloud
mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
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
