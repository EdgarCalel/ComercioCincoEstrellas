const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const producto = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM producto`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

const createProducto = async (req, res)=>{
    const {nombre, codigo, fecha, idestado,  precio, costo, existencia, idproveedor} =req.body
    try {
    
        const create = await sequelize.query(`call sp_producto('${nombre}','${codigo}','${fecha}','${precio}','${costo}','${existencia}','${idestado}','${idproveedor}')`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    producto,
    createProducto
};