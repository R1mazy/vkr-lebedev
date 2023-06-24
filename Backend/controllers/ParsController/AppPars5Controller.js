const results = require('../../pars/AppPars5')
class AppPars5Controller {
    async getAll(req, res, next) {
        const appparss5 = await results.findAll()
        return res.json(appparss5) 
    }

}

module.exports = new AppPars5Controller() 