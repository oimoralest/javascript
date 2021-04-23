// IMPORTING
import express from 'express';
import helmet from 'helmet';
import 'dotenv/config.js';
import homeRouter from '../routes/home.js';
import https from 'https';
import {readFileSync} from 'fs';
import movieRouter from '../routes/movie.js';
import {imagesPolicy} from '../middlewares/contentSecurityPolicy.js';
import {imageBaseURL} from '../middlewares/imageBaseUrl.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// CONSTANTS
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;
const apiKey = process.env.API_KEY;
const apiBaseUrl = process.env.API_BASE_URL;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = process.env.IMG_BASE_URL;

// Creating app
const app = express();

// Serving public content
app.use(express.static('public'));

// Protecting app
app.use(helmet());

// Enabling cors
app.use(cors());

// Parsing http content
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setting views
app.set('views', process.cwd() + '/views');
app.set('view engine', 'pug');

// Middlewares
app.use(imagesPolicy);
app.use(imageBaseURL);
app.use(cookieParser());

// ROUTERS
app.use('/', homeRouter);
app.use('/movie/', movieRouter);

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
