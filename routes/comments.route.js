const { Router } = require('express')
const { commentsController } = require('../controller/commets.controller')
const router = Router()

router.get('/comments/:id', commentsController.getComments)
router.post('/comments', commentsController.addComments)
router.delete('/comments/:id', commentsController.deleteComments)

module.exports = router
