const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars8Controller')



router.get('/download8', appparsController.getAll)

module.exports = router