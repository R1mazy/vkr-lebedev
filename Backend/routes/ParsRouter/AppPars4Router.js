const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars4Controller')



router.get('/download4', appparsController.getAll)

module.exports = router