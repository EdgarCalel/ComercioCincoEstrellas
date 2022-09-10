const express = require('express');
const server = express()
const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const usuario = async (req, res, done)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM roles`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

module.exports ={
    usuario
} 