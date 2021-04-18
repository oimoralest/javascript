// IMPORTING
import express from 'express';
import helmet from 'helmet';
import 'dotenv/config.js';
import homeRouter from '../routes/home.js';
import https from 'https';
import {readFileSync} from 'fs';

// CONSTANTS
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;
const apiKey = process.env.API_KEY;
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

// Creating app
const app = express();

// Serving public content
app.use(express.static('public'));

// Protecting app
app.use(helmet());

// Parsing http content
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setting views
app.set('views', process.cwd() + '/views');
app.set('view engine', 'pug');



// Running the server
https
	.createServer(
		{
			key: readFileSync('key.pem'),
			cert: readFileSync('cert.pem'),
		},
		app,
	)
	.listen(port, host, () => {
		console.log(`Server running on ${host}:${port}`);
	});
