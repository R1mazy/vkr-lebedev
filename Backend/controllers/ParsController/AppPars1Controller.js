const results = require('../../pars/AppPars1')
class AppPars1Controller {
    async getAll(req, res, next) {
        const appparss1 = await results.findAll()
        return res.json(appparss1) 
    }

}

module.exports = new AppPars1Controller() 