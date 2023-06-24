const results = require('../../pars/AppPars4')
class AppPars4Controller {
    async getAll(req, res, next) {
        const appparss4 = await results.findAll()
        return res.json(appparss4) 
    }

}

module.exports = new AppPars4Controller() 