// Importing
const mongoose = require('mongoose');

// Schema
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

// Exporting
exports.Product = mongoose.model('Product', productSchema);