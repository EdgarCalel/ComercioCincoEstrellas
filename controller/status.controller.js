const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const status = async (req, res)=>{
try {
   
    res.json("hola estoy vivo")
} catch (error) {
    console.log(error)
}
}


module.exports ={
    status
};