const results = require('../../pars/AppPars9')
class AppPars9Controller {
    async getAll(req, res, next) {
        const appparss9 = await results.findAll()
        return res.json(appparss9) 
    }

}

module.exports = new AppPars9Controller() 