const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars3Controller')



router.get('/download3', appparsController.getAll)

module.exports = router