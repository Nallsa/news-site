const { Router } = require('express')

const { newsController } = require('../controller/news.controller')
const { db } = require('../models/News.model')

const router = Router()

router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.patchNews)
router.get('/news/:id', newsController.getNews)
router.get('/news', newsController.getNewsFull)
router.get('/news/:id', newsController.getNewsCatigories)

module.exports = router
