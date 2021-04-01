// This script creates a server with express to share static files

// Importing express
const express = require('express');

// Creating express app
const app = express();

// Serving static files
app.use(express.static('public'))

// Running the server
app.listen(80, () => {
	console.log('Server is listening on port 80');
});
