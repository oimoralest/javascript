import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
	res.json({
		msg: 'Router works',
	});
});

export default router;
