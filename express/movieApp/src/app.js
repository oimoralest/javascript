// IMPORTING
import express from 'express';
import helmet from 'helmet';
import 'dotenv/config.js';
import homeRouter from '../routes/home.js';
import movieRouter from '../routes/movie.js';
import {imagesPolicy} from '../middlewares/contentSecurityPolicy.js';
import {imageBaseURL} from '../middlewares/imageBaseUrl.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// CONSTANTS
const port = process.env.PORT || 80;

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
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
