const mongoose = require('mongoose')

const CategoriesSchema = mongoose.Schema({
  categoriesName: String,
})

const Categories = mongoose.model('Categories', CategoriesSchema)

module.exports = Categories
