const Categories = require('../models/Categories.model')

module.exports.categoriesController = {
  postCatigories: async (req, res) => {
    await Categories.create({ categoriesName: req.body.categoriesName })
    res.json('categories add')
  },
  deleteCatigories: async (req, res) => {
    await Categories.findByIdAndRemove(req.params.id)
    res.json('categories delete')
  },
  getCatigories: async (req, res) => {
    res.json(await Categories.find())
  },
}
