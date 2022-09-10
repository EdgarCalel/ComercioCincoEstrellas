const  {Sequelize}  = require('sequelize');
const sequelize = new Sequelize('postgres://edgar:emiliano1707@localhost:5432/comercio')

module.exports = {sequelize}