/**
 * Defines the routes and methods for categories
 */
// Importing
const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

// GET
// All categories
router.get('/', async (req, res) => {
	const categoryList = await Category.find();

	if (!categoryList) {
		return res.status(500).json({success: false});
	}
	res.status(200).send(categoryList);
});

// Categorie by id
router.get('/:id', async (req, res) => {
	const category = await Category.findById(req.params.id);
	if (!category) {
		return res.status(500).json({message: 'The category was not found!'});
	}
	res.status(200).send(category);
});

// POST
router.post('/', async (req, res) => {
	let category = new Category({
		name: req.body.name,
		icon: req.body.icon,
		color: req.body.color,
	});
	category = await category.save();
	if (!category) {
		return res.status(404).send('The category could not be created!');
	}
	res.send(category);
});

// PUT
router.put('/:id', async (req, res) => {
	const category = await Category.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			icon: req.body.icon,
			color: req.body.color,
		},
		{
			new: true,
		},
	);
	if (!category) {
		return res.status(404).send('The category could not be updated!');
	}
	res.send(category);
});

// DELETE
router.delete('/:id', async (req, res) => {
	try {
		const category = await Category.findByIdAndRemove(req.params.id);
		if (category) {
			res.status(200).json({
				success: true,
				message: 'Category successfully deleted',
			});
		} else {
			res.status(404).json({
				success: false,
				message: 'Category not found!',
			});
		}
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
