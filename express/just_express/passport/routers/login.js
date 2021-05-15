import express from 'express';
import passport from 'passport';

// Creating router
const loginRouter = express.Router();

// Login page
loginRouter.get(
	'/facebook/',
	passport.authenticate('facebook', {failureRedirect: '/'}),
);

loginRouter.get(
	'/github/',
	passport.authenticate('github', {failureRedirect: '/'}),
);

//

export default loginRouter;
