import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import {pool} from '../postgresConn/pgconn.js';

const port = process.env.APP_PORT | 8000;
const app = express();

// Protecting the app
app.use(helmet());

// index page
app.get('/', (req, res, next) => {
	pool.query('Select * from test', (error, dbResponse) => {
		if (error) {
            console.log(error)
			res.json(error);
		} else {
			res.json(dbResponse);
		}
	});
});

//Running the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
