const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const clientes = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM clientes`, { type: QueryTypes.SELECT });
    res.json("no se encuentra data")
    // res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

const createClient = async (req, res)=>{
    const {nombre, apellido, direccion, nit, telefono} =req.body
    try {
        const create = await sequelize.query(`
        insert into clientes ( nombre, apellido, direccion, nit, telefono)
        values ('${nombre}','${apellido}','${direccion}','${nit}','${telefono}')`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    clientes,
    createClient
};