const Router = require('express')
const router = new Router()
const appparsController = require('../controllers/appparsController')



router.get('/download', appparsController.getAll)

module.exports = router