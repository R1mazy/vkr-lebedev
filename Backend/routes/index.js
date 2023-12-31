const Router = require('express')
const router = new Router()
const favouritesRouter = require('./favouritesRouter')
const userRouter = require('./userRouter')
const historyRouter = require('./historyRouter')
const appparsRouter = require('./appparsRouter')

const apppars1Router = require('./ParsRouter/AppPars1Router')
const apppars2Router = require('./ParsRouter/AppPars2Router')
const apppars3Router = require('./ParsRouter/AppPars3Router')
const apppars4Router = require('./ParsRouter/AppPars4Router')
const apppars5Router = require('./ParsRouter/AppPars5Router')
const apppars6Router = require('./ParsRouter/AppPars6Router')
const apppars7Router = require('./ParsRouter/AppPars7Router')
const apppars8Router = require('./ParsRouter/AppPars8Router')
const apppars9Router = require('./ParsRouter/AppPars9Router')
const apppars10Router = require('./ParsRouter/AppPars10Router')

router.use('/user', userRouter)
router.use('/history', historyRouter)
router.use('/favourites', favouritesRouter)
router.use('/apppars', appparsRouter)

router.use('/apppars1', apppars1Router)
router.use('/apppars2', apppars2Router)
router.use('/apppars3', apppars3Router)
router.use('/apppars4', apppars4Router)
router.use('/apppars5', apppars5Router)
router.use('/apppars6', apppars6Router)
router.use('/apppars7', apppars7Router)
router.use('/apppars8', apppars8Router)
router.use('/apppars9', apppars9Router)
router.use('/apppars10', apppars10Router)

module.exports = router