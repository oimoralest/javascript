// This script renders a file with ejs view engine
// Importing
const express = require('express');
const helmet = require('helmet');

// Creating express application
const app = express();

// Serving static public content
app.use(express.static('public'));
// Protecting the app
app.use(helmet());
// Parsing json an urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setting view paths
app.set('views', process.cwd() + '/views');

// Setting view engine
app.set('view engine', 'ejs');

// Get request
app.get('/', (req, res) => {
	res.render('index');
});

// Creating server
app.listen(80, () => {
	console.log('Server running on port 80');
});
