const results = require('../../pars/AppPars2')
class AppPars2Controller {
    async getAll(req, res, next) {
        const appparss2 = await results.findAll()
        return res.json(appparss2) 
    }

}

module.exports = new AppPars2Controller() 