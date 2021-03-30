const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	street: {
		type: String,
		default: '',
	},
	city: {
		type: String,
		default: '',
	},
	country: {
		type: String,
		default: '',
	},
	zip: {
		type: String,
		default: '',
	},
});

// Exporting _id also as id
userSchema.virtual('id').get(function () {
	return this._id.toHexString();
});

userSchema.set('toJSON', {
	virtual: true,
});

exports.User = mongoose.model('User', userSchema);
