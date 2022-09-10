const mongoose = require('mongoose')

const CommentsSchema = mongoose.Schema({
  comment: String,
  textComments: String,
  newsCommetsid: String,
})

const Comments = mongoose.model('comments', CommentsSchema)

module.exports = Comments
