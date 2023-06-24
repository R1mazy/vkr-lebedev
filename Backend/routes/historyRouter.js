const Router = require('express')
const router = new Router()
const historyController = require('../controllers/historyController')
const authMiddleware = require("../middleware/authMiddleware");


router.post('/',authMiddleware, historyController.create)
router.get('/', authMiddleware, historyController.getAll)

module.exports = router