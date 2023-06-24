const results = require('../../pars/AppPars7')
class AppPars7Controller {
    async getAll(req, res, next) {
        const appparss7 = await results.findAll()
        return res.json(appparss7) 
    }

}

module.exports = new AppPars7Controller() 