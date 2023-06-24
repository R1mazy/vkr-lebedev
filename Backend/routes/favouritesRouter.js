const Router = require('express')
const router = new Router()
const favouritesController = require('../controllers/favouritesController')
const authMiddleware = require("../middleware/authMiddleware");


router.post('/', authMiddleware, favouritesController.create)
router.get('/', authMiddleware, favouritesController.getAll)
router.delete('/:id', authMiddleware, favouritesController.removeById)
// router.post('/', favouritesController.delete);

module.exports = router