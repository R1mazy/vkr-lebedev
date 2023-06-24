const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Hist = sequelize.define('hist', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const History = sequelize.define('history', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    kr_info: { type: DataTypes.STRING },
    prod: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
})

const Favr = sequelize.define('favr', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Favourites = sequelize.define('favourites', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    kr_info: { type: DataTypes.STRING(1000) },
    prod: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
})


const RelationUserFavorites = sequelize.define('relation-user-favorite', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    fav_id: { type: DataTypes.INTEGER },
})

const RelationUserHistory = sequelize.define('relation-user-history', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    history_id: { type: DataTypes.INTEGER },
    history_date: { type: DataTypes.DATE },
})



RelationUserHistory.belongsTo(User, {
    foreignKey: 'user_id'
})

RelationUserHistory.belongsTo(History, {
    foreignKey: 'history_id'
})


RelationUserFavorites.belongsTo(User, {
    foreignKey: 'user_id'
})

RelationUserFavorites.belongsTo(Favourites, {
    foreignKey: 'fav_id'
})

///

User.hasMany(Hist)
Hist.belongsTo(User)

Hist.hasOne(History)
History.belongsTo(Hist)

User.hasMany(Favr)
Favr.belongsTo(User)

Favr.hasOne(Favourites)
Favourites.belongsTo(Favr)

module.exports = {
    User,
    Hist,
    History,
    Favr,
    Favourites,
    RelationUserFavorites,
    RelationUserHistory
}