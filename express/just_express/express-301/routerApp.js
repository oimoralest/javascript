// IMPORTS
import express from 'express';
import helmet from 'helmet';
import https from 'https';
import fs from 'fs';
import router from './routers/theRouter.js';
import userRouter from './routers/userRouter.js';

// Creating express app
const app = express();

// MIDDLEWARES
app.use(helmet());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

// ROUTERS
// looks for routers on routers folder
app.use('/', router);
app.use('/user', userRouter);

// Creating https server
https
	.createServer(
		{
			key: fs.readFileSync('key.pem'),
			cert: fs.readFileSync('cert.pem'),
		},
		app,
	)
	.listen(80, () => {
		console.log('Server running on port 80');
	});
