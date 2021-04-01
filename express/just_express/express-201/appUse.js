// This script defines a middleware function called validateUser

// Importing
const express = require('express');

// Creating express app
const app = express();

// Defining middleware function
function validateUser(req, res, next) {
	res.locals.validated = true;
	next();
}

// Middleware for all paths and request types
// app.use(validateUser)

// Middleware for '/admin' and all request types
// Only admin route will pass for this middleware
app.use('/admin', validateUser);

// Middleware for all paths but only for GET request
// get method is a middleware
// app.get('/', validateUser)

// GET
app.get('/', (req, res, next) => {
	res.send('<h1> Main page </h1>');
	console.log(res.locals.validated);
});

app.get('/admin', (req, res, next) => {
	res.send('<h1> Admin page </h1>');
	console.log(res.locals.validated);
});

// Running server
app.listen(80, () => {
	console.log('Server running on port 80');
});
