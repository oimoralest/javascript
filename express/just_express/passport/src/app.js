import express from 'express';
import helmet from 'helmet';
import 'dotenv/config';
import loginRouter from '../routers/login.js';
import homeRouter from '../routers/home.js';
import https from 'https';
import {readFileSync} from 'fs';

// CONSTANTS
const port = process.env.PORT || 8000;

// Creating the app
const app = express();

// Protecting the app
app.use(helmet());

// Creating the body for requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setting view engine
app.set('views', process.cwd() + '/views');
app.set('view engine', 'pug');

// Sharing public content
app.use(express.static('public'));

// Loading the routers
app.use('', homeRouter);
app.use('/login', loginRouter);

// Running the server
https
	.createServer(
		{
			key: readFileSync('key.key'),
			cert: readFileSync('cert.crt'),
		},
		app,
	)
	.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
