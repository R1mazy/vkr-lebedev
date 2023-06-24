const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars5Controller')



router.get('/download5', appparsController.getAll)

module.exports = router