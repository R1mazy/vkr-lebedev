const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars1Controller')



router.get('/download1', appparsController.getAll)

module.exports = router