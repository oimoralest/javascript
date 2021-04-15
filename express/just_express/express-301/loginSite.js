// This script creates an app to server a login site

// IMPORTING
import {join} from 'path';
import express, {json, urlencoded} from 'express';
import helmet from 'helmet';
import {createServer} from 'https';
import {readFileSync} from 'fs';
import cookerParser from 'cookie-parser';

// Creating express app
const app = express();

// MIDDLEWARES
// Protecting the app
app.use(helmet());

// Serving public content
app.use(express.static('public'));

// Parsing urlencoded and json to create body
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cookerParser());
// Rendering
app.use((req, res, next) => {
	// Checks for query params
	if (req.query.msg === 'fail') {
		res.locals.msg =
			'Sorry, This username and password combination does not exists';
	} else {
		res.locals.msg = '';
	}
	next();
});

// SETTINGS
// Setting the views
app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views');

// ROUTES
// Handling id param
app.param('id', (req, res, next, id) => {
	console.log(`The id is ${id}`);
	next();
});

// Index page
app.get('/', (req, res, next) => {
	res.send('<h1>Home page</h1>');
});

// Login page
app.get('/login', (req, res, next) => {
	res.render('login');
});

// check for login (middleware), the browser does not see this!
app.post('/process_login', (req, res, next) => {
	// Here we can validate the data
	const username = req.body.username;
	const password = req.body.password;
	if (password === '') {
		// Saving username in cookies
		res.cookie('username', username);
		res.redirect('/welcome');
	} else {
		res.redirect('/login?msg=fail');
	}
});

// welcome page, after login
app.get('/welcome', (req, res, next) => {
	// Renders welcome.ejs file on views folder and sends to it cookie information
	res.render('welcome', {
		username: req.cookies.username,
	});
});

// Story page
app.get('/story/:id', (req, res, next) => {
	console.log(req.params.id);
	// Uses params
	res.send(`<h1>Story: ${req.params.id}</h1>`);
});

// Statement download
app.get('/statement', (req, res, next) => {
	res.download(
		join(__dirname, 'userStatements/BankStatementChequing.png'),
		'OptionalName.png',
	);
});

// logout (middleware)
app.get('/logout', (req, res, next) => {
	// Deleting cookies
	res.clearCookie('username');
	res.redirect('/login');
});

// Running the server
createServer(
	{
		key: readFileSync('key.pem'),
		cert: readFileSync('cert.pem'),
	},
	app,
).listen(80, () => {
	console.log('Server running on port 80');
});
