const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// GET
// All users
router.get('/', async (req, res) => {
	const users = await User.find().select('-passwordHash');

	if (!users) {
		res.status(500).json({success: false});
	}
	res.status(200).send(users);
});

// User by id
router.get('/:id', async (req, res) => {
	const user = await User.findById(req.params.id).select('-passwordHash');

	if (!user) {
		res.status(500).json({success: false});
	}
	res.status(200).send(user);
});

// Number of users
router.get('/get/count', async (req, res) => {
	const userCount = await User.countDocuments((count) => count);
	if (!userCount) {
		return res.status(500).json({success: false});
	}
	res.status(200).send({
		userCount: userCount,
	});
});

// POST
// Post a user
router.post('/', async (req, res) => {
	let user = new User({
		name: req.body.name,
		email: req.body.email,
		passwordHash: bcrypt.hashSync(req.body.password),
		phone: req.body.phone,
		isAdmin: req.body.isAdmin,
		street: req.body.street,
		city: req.body.city,
		country: req.body.country,
		zip: req.body.zip,
	});
	user = await user.save();
	if (!user) {
		return res.status(400).send('The user could not be created!');
	}
	res.send(user);
});

// User login
router.post('/login', async (req, res) => {
	const user = await User.findOne({email: req.body.email});
	if (!user) {
		return res.status(400).send('User could not be found');
	}
	if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
		const secret = process.env.SECRET;
		const token = jwt.sign(
			{
				userId: user.id,
				isAdmin: user.isAdmin,
			},
			secret,
			{
				expiresIn: '1d',
			},
		);
		res.status(200).send({user: user.email, token: token});
	} else {
		res.status(400).send('Wrong password!');
	}
});

// User register
router.post('/register', async (req, res) => {
	let user = new User({
		name: req.body.name,
		email: req.body.email,
		passwordHash: bcrypt.hashSync(req.body.password),
		phone: req.body.phone,
		isAdmin: req.body.isAdmin,
		street: req.body.street,
		city: req.body.city,
		country: req.body.country,
		zip: req.body.zip,
	});
	user = await user.save();
	if (!user) {
		return res.status(400).send('The user could not be created!');
	}
	res.send(user);
});

// DELETE
router.delete('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndRemove(req.params.id);
		if (user) {
			res.status(200).json({
				success: true,
				message: 'user successfully deleted',
			});
		} else {
			res.status(404).json({
				success: false,
				message: 'user not found!',
			});
		}
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
