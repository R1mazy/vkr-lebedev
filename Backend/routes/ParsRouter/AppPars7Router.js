const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars7Controller')



router.get('/download7', appparsController.getAll)

module.exports = router