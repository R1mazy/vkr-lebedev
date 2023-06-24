const results = require('../../pars/AppPars10')
class AppPars10Controller {
    async getAll(req, res, next) {
        const appparss10 = await results.findAll()
        return res.json(appparss10) 
    }

}

module.exports = new AppPars10Controller()