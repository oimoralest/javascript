// This script defines a POST method to an html file that makes a POST request
// with encoded content

// Importing
const express = require('express');
const helmet = require('helmet');

// Creating express app
const app = express();

// Protecting the app
app.use(helmet());

// Serving static content
app.use(express.static('public'));
// These two middleware are necessary to create the body from
// x-www-form-urlencoded content type
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// POST
app.post('/ajax', (req, res) => {
	console.log(req.body.name);
	res.send('That was a POST request');
});

// Running the server
app.listen(80, () => {
	console.log('Server running on port 80');
});
