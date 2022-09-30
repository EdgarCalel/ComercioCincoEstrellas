const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const roles = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM roles`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

const createRol = async (req, res)=>{
    const {nombre, apellido, direccion, nit, telefono} =req.body
    try {
        const create = await sequelize.query(`
        insert into roles ( nombre, apellido, direccion, nit, telefono)
        values ('${nombre}','${apellido}','${direccion}','${nit}','${telefono}')`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    roles,
    createRol
};