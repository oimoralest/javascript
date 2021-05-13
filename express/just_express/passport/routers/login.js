import express from 'express';

// Creating router
const loginRouter = express.Router();

// Login page
loginRouter.get('/', (req, res, next) => {
	res.render('login');
});

export default loginRouter;
