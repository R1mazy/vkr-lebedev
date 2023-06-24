const {History} = require('../models/models')
const ApiError = require('../error/ApiError')
const {RelationUserHistory} = require('../models/models')

class HistoryController {


    async create(req, res, next) {
        console.log('777777777777777777777')
        try {
            const {body} = req;
            let historyExist = await RelationUserHistory.findAll({
                where: {user_id:req.user.id},
                include:[{model:History}]
            });
            historyExist = historyExist.filter(relation => {
               return relation.history.kr_info === body.silka
            } )
            if(historyExist.length) return res.json('History exist')

            const history = await History.create({
                name: body.title,
                kr_info: body.silka,
                prod: body.dlit,
                price: body.price
            })

            await RelationUserHistory.create({
                user_id:req.user.id,
                history_id: history.id,
                history_date: new Date()
            })
            res.end('Success')
            // let {name, kr_info, prod, price, histId} = req.body
            // const history = await History.create({name, kr_info, prod, price, histId});
            // return res.json(history)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }


    async getAll(req, res, next) {

        const histories = await RelationUserHistory.findAll({
            where:{
                user_id:req.user.id
            },
            include:[{model:History}]
        })
        return res.json(histories)
    }

}

module.exports = new HistoryController()