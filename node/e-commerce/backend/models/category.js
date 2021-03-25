const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
	},
	icon: {
		type: String,
	},
});

exports.Category = mongoose.model('Category', categorySchema);
