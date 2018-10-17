const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const CategorySchema = new Schema({
  name: String,
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
