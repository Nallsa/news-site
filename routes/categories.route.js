const { Router } = require('express')

const { categoriesController } = require('../controller/categories.controller')

const router = Router()

router.post('/catigories', categoriesController.postCatigories)
router.delete('/catigories/:id', categoriesController.deleteCatigories)
router.get('/catigories', categoriesController.getCatigories)

module.exports = router
