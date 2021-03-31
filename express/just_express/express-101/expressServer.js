// This script creates a simple server with express

// Imports express module
const express = require('express');

// Creates an express application
// We can look for node_modules/express/lib/router/express.js -> createApplication function
const app = express();

// Method that takes a route and executes a callback function if the route is requested
// Express handles the basic headers (status code, mime-type)
app.all('*', (req, res) => {
	res.send('<h1> Home Page </h1>');
});

// Runs the server
app.listen(80, () => {
	console.log('The server is listening on port 80');
});
