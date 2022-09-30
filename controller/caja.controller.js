const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const caja = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM caja ORDER BY id ASC`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}
 
const createCaja = async (req, res)=>{
    const {idcaja, fecha, descripcion, montoI} =req.body
    try {
        const create = await sequelize.query(`call sp_cajas('${idcaja}','${fecha}','${montoI}','${descripcion}')`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    caja,
    createCaja
};