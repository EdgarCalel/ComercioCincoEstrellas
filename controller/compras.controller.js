const { QueryTypes } = require('sequelize');
const {sequelize} = require('../db/bd');

const compras = async (req, res)=>{
try {
    const datos = await sequelize.query(`SELECT * FROM producto`, { type: QueryTypes.SELECT });
    res.status(200).json({data: datos})
} catch (error) {
    console.log(error)
}
}

const createCompras = async (req, res)=>{
    const {nombre, codigo, fecha, idestado,  precio, costo, existencia, idproveedor} =req.body
    try {
    
        const create = await sequelize.query(`call sp_compras('${nombre}','${codigo}','${fecha}','${precio}','${costo}','${existencia}','${idestado}','${idproveedor}')`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

const createComprasEncabezado = async (req, res)=>{
    const {fecha, idstate, proveedorid } =req.body
    try {
        const create = await sequelize.query(`call sp_comprasE('${fecha}',${idstate},${proveedorid});`, { type: QueryTypes.SELECT });
        res.status(200).json({data: create})
    } catch (error) {
        console.error(error)
    }
}

const createComprasDetalle = async (req, res)=>{
    const dataDetalle =req.body
    try {
        let totalVenta=0
        dataDetalle.forEach((item) => {
            totalVenta += (item.costo_unitario* item.cantidad)
        });
console.log(dataDetalle)
     await dataDetalle.map(async(el, index)=>(
             await sequelize.query(`call sp_compras(${el.cantidad},${el.costo_unitario},'${el.idproducto}',${el.cantidad* el.costo_unitario}, ${totalVenta});`, 
             { type: QueryTypes.SELECT })
        ))
        res.status(200).json({data: "se ha realizado la operacion"})
    } catch (error) {
        console.error(error)
    }
}




module.exports ={
    compras,
    createCompras,
    createComprasEncabezado,
    createComprasDetalle
};