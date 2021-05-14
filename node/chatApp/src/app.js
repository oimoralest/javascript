import express from 'express';
import homeRouter from '../routes/home.js';
import messagesRouter from '../routes/messages.js'
import helmet from 'helmet';
import { scriptSource } from '../middleware/contentSecurityPolicy.js';

const app = express();

// Protecting the app
app.use(helmet());

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// STATIC CONTENT
app.use(express.static('public'));

// VIEW ENGINE
app.set('views', process.cwd() + '/views');
app.set('view engine', 'pug');

// MIDDLEWARES
app.use(scriptSource);

// ROUTERS
app.use('/', homeRouter);
app.use('/message', messagesRouter);

// SERVER
const server = app.listen(8000, () => {
    console.log('Server running on port', server.address().port);
});
