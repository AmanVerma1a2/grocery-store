const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide product description']
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    min: [0, 'Price cannot be negative']
  },
  image: {
    type: String,
    required: [true, 'Please provide product image URL']
  },
  category: {
    type: String,
    required: [true, 'Please provide product category'],
    enum: ['vegetables', 'fruits', 'dailyNeeds']
  },
  stock: {
    type: Number,
    default: 100,
    min: [0, 'Stock cannot be negative']
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);