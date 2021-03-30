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

// Exporting _id also as id
categorySchema.virtual('id').get(function () {
	return this._id.toHexString();
});

categorySchema.set('toJSON', {
	virtual: true,
});

exports.Category = mongoose.model('Category', categorySchema);
