const results = require('../../pars/AppPars8')
class AppPars8Controller {
    async getAll(req, res, next) {
        const appparss8 = await results.findAll()
        return res.json(appparss8) 
    }

}

module.exports = new AppPars8Controller() 