const Router = require('express')
const router = new Router()
const appparsController = require('../../controllers/ParsController/AppPars9Controller')



router.get('/download9', appparsController.getAll)

module.exports = router