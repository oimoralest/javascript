import express from 'express';

const messagesRouter = express.Router();

messagesRouter.post('/', (req, res, next) => {
    console.log(req.body);
});

export default messagesRouter;
