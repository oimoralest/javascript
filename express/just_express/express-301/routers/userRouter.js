import express from 'express';

let userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
	res.json({
		msg: 'User router works',
	});
});

export default userRouter;
