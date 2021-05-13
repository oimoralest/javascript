import express from 'express';

const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
	res.render('home');
});

export default homeRouter;
