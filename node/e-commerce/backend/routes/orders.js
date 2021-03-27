const {Order} = require('../models/order');
const express = require('express');
const {OrderItem} = require('../models/order-item');
const router = express.Router();
const {Product} = require('../models/product');

// GET
// All orders
router.get('/', async (req, res) => {
	const orderList = await Order.find()
		.populate('user', 'name email phone')
		.sort({dateOrdered: -1});
	if (!orderList) {
		res.status(500).json({success: false});
	}
	res.send(orderList);
});

// Order by id
router.get('/:id', async (req, res) => {
	const orderList = await Order.findById(req.params.id)
		.populate('user', 'name email phone')
		.populate({
			path: 'orderItems',
			populate: {
				path: 'product',
				populate: 'category',
			},
		});
	if (!orderList) {
		res.status(500).json({success: false});
	}
	res.send(orderList);
});

// Total sales
router.get('/get/totalsales', async (req, res) => {
	const totalSales = await Order.aggregate([
		{$group: {_id: null, totalSales: {$sum: '$totalPrice'}}}
	])
	if (!totalSales) {
		return res.status(400).send('The order sales could not be generated')
	}
	res.json({totalSales: totalSales.pop().totalSales})
})

// Number of orders
router.get('/get/count', async (req, res) => {
	const orderCount = await Order.countDocuments((count) => count);
	if (!orderCount) {
		return res.status(500).json({success: false});
	}
	res.status(200).send({
		orderCount: orderCount,
	});
});

// POST
router.post('/', async (req, res) => {
	let orderItems = [];
	let totalPrice = 0;
	for (let order of req.body.orderItems) {
		let product = await Product.findById(order.product);
		if (!product) {
			return res
				.status(404)
				.send(`The product ${order.product} does not exists!`);
		}
		totalPrice += product.price * order.quantity;
		let newOrderItem = new OrderItem({
			product: order.product,
			quantity: order.quantity,
		});
		newOrderItem = await newOrderItem.save();
		if (!newOrderItem) {
			return res.status(404).send('The order coudl not be created');
		}
		orderItems.push(newOrderItem._id);
	}
	let order = new Order({
		orderItems: orderItems,
		shippingAddress1: req.body.shippingAddress1,
		shippingAddress2: req.body.shippingAddress2,
		city: req.body.city,
		zip: req.body.zip,
		country: req.body.country,
		phone: req.body.phone,
		status: req.body.status,
		totalPrice: totalPrice,
		user: req.body.user,
	});
	order = await order.save();
	if (!order) {
		return res.status(404).send('The order could not be created!');
	}
	res.send(order);
});

// PUT
router.put('/:id', async (req, res) => {
	const order = await Order.findByIdAndUpdate(
		req.params.id,
		{
			status: req.body.status,
		},
		{
			new: true,
		},
	);
	if (!order) {
		return res.status(401).send('The order could not be updated');
	}
	res.status(200).send(order);
});

// DELETE
router.delete('/:id', async (req, res) => {
	try {
		let order = await Order.findById(req.params.id);
		for (let items of order.orderItems) {
			await OrderItem.findByIdAndRemove(items);
			if (!OrderItem) {
				return res.status(404).json({
					succes: false,
					message: 'Some items could not be deleted',
				});
			}
		}
		order = await Order.findByIdAndRemove(req.params.id);
		if (order) {
			res.status(200).json({
				success: true,
				message: 'Order successfully deleted',
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
