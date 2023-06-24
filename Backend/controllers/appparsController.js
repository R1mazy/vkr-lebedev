const results = require('../apppars')
class appparsController {
    async getAll(req, res, next) {
        const appparss = await results.findAll()
        return res.json(appparss) 
    }

}

module.exports = new appparsController() 