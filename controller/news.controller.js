const News = require('../models/News.model')

module.exports.newsController = {
  getNews: async (req, res) => {
    res.json(await News.findById(req.params.id))
  },
  getNewsFull: async (req, res) => {
    res.json(await News.find())
  },
  getNewsCatigories: async (req, res) => {
    res.json(await News.find({ categoriesID: req.params.id }))
  },
  postNews: async (req, res) => {
    await News.create({
      title: req.body.title,
      text: req.body.text,
      categoriesID: req.body.categoriesID,
    })
    res.json('News added')
  },
  deleteNews: async (req, res) => {
    await News.findByIdAndRemove(req.params.id)
    res.json('News delete')
  },
  patchNews: async (req, res) => {
    await News.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      text: req.body.text,
      categoriesID: req.body.categoriesID,
    })
    res.json('News updated')
  },
}
