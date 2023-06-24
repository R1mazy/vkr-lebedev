const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars10Controller')



router.get('/download10', appparsController.getAll)

module.exports = router