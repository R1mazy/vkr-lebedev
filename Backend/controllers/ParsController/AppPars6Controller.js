const results = require('../../pars/AppPars6')
class AppPars6Controller {
    async getAll(req, res, next) {
        const appparss6 = await results.findAll()
        return res.json(appparss6) 
    }

}

module.exports = new AppPars6Controller() 