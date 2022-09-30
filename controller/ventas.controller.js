const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const ventas = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM producto`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

const createventasEncabezado = async (req, res)=>{
    const {fecha, idstate, id_cliente } =req.body
    try {
        const create = await sequelize.query(`call sp_ventasE('${fecha}',${idstate},${id_cliente});`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}
// ventaTotalE
const createventasDetalle = async (req, res)=>{
    const dataDetalle =req.body
    try {
        let totalVenta=0
        dataDetalle.forEach((item) => {
            totalVenta += (item.precio_unitario* item.cantidad)
        })
        console.log(totalVenta)
        console.log(dataDetalle)

        await dataDetalle.map(async(el)=>(
             await sequelize.query(`call sp_ventasgood(${el.cantidad},${el.precio_unitario},${el.idproducto},${el.precio_unitario*el.cantidad},${totalVenta});`, { type: QueryTypes.SELECT })
        ))
        res.status(200).json({data: "se ha realizado la operacion"})
    } catch (error) {
        console.error(error)
    }
}




module.exports ={
    ventas,
    createventasEncabezado,
    createventasDetalle
};