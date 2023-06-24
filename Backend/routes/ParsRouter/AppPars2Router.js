const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars2Controller')



router.get('/download2', appparsController.getAll)

module.exports = router