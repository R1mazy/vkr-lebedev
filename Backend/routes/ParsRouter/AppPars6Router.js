const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars6Controller')



router.get('/download6', appparsController.getAll)

module.exports = router