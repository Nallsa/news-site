const Comments = require('../models/Comment.model')

module.exports.commentsController = {
  addComments: async (req, res) => {
    await Comments.create({
      comment: req.body.comment,
      textComments: req.body.textComments,
      newsCommetsid: req.body.newsCommetsid,
    })
    res.json('Commet add')
  },
  deleteComments: async (req, res) => {
    await Comments.findByIdAndRemove(req.params.id)
    res.json('Commet delete')
  },
  getComments: async (req, res) => {
    res.json(await Comments.find({ newsCommets: req.params.id }))
  },
}
