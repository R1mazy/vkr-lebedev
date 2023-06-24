const results = require('../../pars/AppPars3')
class AppPars3Controller {
    async getAll(req, res, next) {
        const appparss3 = await results.findAll()
        return res.json(appparss3) 
    }

}

module.exports = new AppPars3Controller() 