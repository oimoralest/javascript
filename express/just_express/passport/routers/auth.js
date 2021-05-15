import express from 'express';

const authRouter = express.Router();

authRouter.get('/', (req, res, next) => {
  console.log(req.user)
  res.render('auth')
})

export default authRouter;
