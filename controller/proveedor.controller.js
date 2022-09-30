const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const proveedores = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM proveedor`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

const createProveedor = async (req, res)=>{
    const {nombre, apellido, direccion, nit, telefono} =req.body
    try {
        const create = await sequelize.query(`
        insert into proveedor ( nombre, apellido, direccion, nit, telefono)
        values ('${nombre}','${apellido}','${direccion}','${nit}','${telefono}')`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    proveedores,
    createProveedor
};