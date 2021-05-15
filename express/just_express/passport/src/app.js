import express from 'express';
import helmet from 'helmet';
import 'dotenv/config';
import loginRouter from '../routers/login.js';
import homeRouter from '../routers/home.js';
import https from 'https';
import {readFileSync} from 'fs';
import passport from 'passport';
import facebookPassport from 'passport-facebook';
import githubPassport from 'passport-github';
import authRouter from '../routers/auth.js';
import session from 'express-session';

// CONSTANTS
const port = process.env.PORT || 8000;
const GitHubStrategy = githubPassport.Strategy;

// Creating the app
const app = express();

// Protecting the app
app.use(helmet());

// Middlewares
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	}),
);
app.use(passport.initialize());
app.use(passport.session());

// Configuring passport
// Facebook
passport.use(
	new facebookPassport(
		{
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: 'https://localhost:8000/auth/',
		},
		function (accessToken, refreshToken, profile, cb) {
			return cb(null, profile);
		},
	),
);
// GitHub
passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_APP_ID,
			clientSecret: process.env.GITHUB_APP_SECRET,
			callbackURL: 'https://localhost:8000/auth/',
		},
		function (accessToken, refreshToken, profile, cb) {
			return cb(null, profile);
		},
	),
);
// Serializing
passport.serializeUser((user, cb) => {
	cb(null, user);
});
passport.deserializeUser((user, cb) => {
	cb(null, user);
});

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
app.use('/auth', authRouter);

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
