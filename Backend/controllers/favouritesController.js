const {Favourites, RelationUserFavorites} = require('../models/models')
const ApiError = require('../error/ApiError')
class FavouritesController {

    async create(req, res, next) {
        try {
            let {title, info, dlit, price} = req.body
            const favourites = await Favourites.create({name:title, kr_info:info, prod:dlit, price});
            await RelationUserFavorites.create({user_id:req.user.id, kr_info:info, fav_id:favourites.id});
            return res.json(favourites)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getAll(req, res, next) {
        console.log('req.user.id')
        console.log(req.user.id)
        const favourites = await RelationUserFavorites.findAll({
            where:{
                user_id:req.user.id
            },
            include:[{model:Favourites}]
        })
        return res.json(favourites)
    }


    async removeById(req, res) {

        try {
            console.log('req.params')
            console.log(req.params)
            console.log('req.query')
            console.log(req.query)
            await RelationUserFavorites.destroy({where:{
                id:req.params.id
                }})

        }catch (e) {
            throw new Error (e)
        }

        return res.json('Succes')
    }


}

module.exports = new FavouritesController() 