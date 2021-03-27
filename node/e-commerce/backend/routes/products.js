// Importing
const {Product} = require('../models/product');
const express = require('express');
const {Category} = require('../models/category');
const router = express.Router();
const multer = require('multer');

const FILE_TYPE_MAP = {
	'image/png': 'png',
	'image/jpeg': 'jpeg',
	'image/jpg': 'jpg',
};

// Images storage
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const isValid = FILE_TYPE_MAP[file.mimetype];
		let UploadError = new Error('Invalid image type');
		if (isValid) {
			UploadError = null;
		}
		cb(UploadError, 'public/uploads');
	},
	filename: function (req, file, cb) {
		const fileName = file.originalname.replace(' ', '-');
		const extension = FILE_TYPE_MAP[file.mimetype];
		cb(null, `${fileName}-${Date.now()}.${extension}`);
	},
});

const uploadOptions = multer({storage: storage});

// GET
// All products
router.get('/', async (req, res) => {
	const products = await Product.find().populate('category');
	if (!products) {
		return res.status(500).json({success: false});
	}
	res.status(200).send(products);
});

// Product by id
router.get('/:id', async (req, res) => {
	const product = await Product.findById(req.params.id).populate('category');
	if (!product) {
		return res.status('500').json({message: 'Product not found!'});
	}
	res.status(200).send(product);
});

// Number of products
router.get('/get/count', async (req, res) => {
	const productCount = await Product.countDocuments((count) => count);
	if (!productCount) {
		return res.status(500).json({success: false});
	}
	res.status(200).send({
		productCount: productCount,
	});
});

// Features products
router.get('/get/featured/', async (req, res) => {
	const count = req.query.count ? req.query.count : 0;
	const products = await Product.find({isFeatured: true})
		.populate('category')
		.limit(parseInt(count));
	if (!products) {
		return res.status(500).json({success: false});
	}
	res.status(200).send(products);
});

// Product by category
router.get('/', async (req, res) => {
	let categories = {};
	if (req.query.categories) {
		categories = {category: req.query.categories.split(',')};
	}
	const products = await Product.find(categories).populate('category');
	if (!products) {
		return res.status(500).json({success: false});
	}
	res.status(200).send(products);
});

// POST
router.post('/', uploadOptions.single('image'), async (req, res) => {
	const category = await Category.findById(req.body.category);
	if (!category) {
		return res.status(400).send('Indalid category');
	}
	const file = req.file;
	if (!file) {
		return res.status(400).send('No file uploaded!');
	}
	const fileName = req.file.filename;
	const basePath = `${req.protocol}://${req.get('host')}/public/upload/`;
	let product = new Product({
		name: req.body.name,
		description: req.body.description,
		richdescription: req.body.richdescription,
		image: `${basePath}${fileName}`,
		brand: req.body.brand,
		price: req.body.price,
		category: category._id,
		countInStock: req.body.countInStock,
		rating: req.body.rating,
		numReviews: req.body.numReviews,
		isFeatured: req.body.isFeatured,
	});
	product = await product.save();
	if (!product) {
		return res.status(500).send('The product could not be created!');
	}
	res.send(product);
});

// PUT
router.put('/:id', async (req, res) => {
	const category = await Category.findById(req.body.category);
	if (!category) {
		return res.status(500).send('Indalid category');
	}
	const product = await Product.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			description: req.body.description,
			richdescription: req.body.richdescription,
			image: req.body.image,
			images: req.body.images,
			brand: req.body.brand,
			price: req.body.price,
			category: category._id,
			countInStock: req.body.countInStock,
			rating: req.body.rating,
			numReviews: req.body.numReviews,
			isFeatured: req.body.isFeatured,
		},
		{
			new: true,
		},
	);
	if (!product) {
		return res.status(500).send('The product could not be updated!');
	}
	res.send(product);
});

router.put(
	'/galley-images/:id',
	uploadOptions.array('images', 10),
	async (req, res) => {
		const files = req.files;
		if (!files) {
			return res.status(400).send('No uploaded files')
		}
		const basePath = `${req.protocol}://${req.get('host')}/public/upload/`;
		let imagesPath = []
		for (let file of files) {
			imagesPath.push(`${basePath}${file.fileName}`)
		}
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			{
				images: imagesPath
			},
			{
				new: true,
			},
		);
		if (!product) {
			return res.status(500).send('The product could not be updated!');
		}
		res.send(product);
	},
);

// DELETE
router.delete('/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndRemove(req.params.id);
		if (product) {
			res.status(200).json({
				success: true,
				message: 'Product successfully deleted',
			});
		} else {
			res.status(404).json({
				success: false,
				message: 'Product not found!',
			});
		}
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
