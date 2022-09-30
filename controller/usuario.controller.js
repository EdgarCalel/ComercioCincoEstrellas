const { QueryTypes } = require('sequelize');
const { sequelize } = require('../db/bd');

const usuario = async (req, res, done) => {
    try {
        const datos = await sequelize.query(`SELECT * FROM usuario`, { type: QueryTypes.SELECT });
        res.status(200).json({ data: datos })
    } catch (error) {
        console.log(error)
    }
}
const createusuario = async (req, res, done) => {
    try {
        const bodyUser = req.body
        const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let aleatoria = "";
        let contrasenia ="";
        for (let i = 0; i < 4; i++) {
            aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
        }
        for (let i = 0; i < 8; i++) {
            contrasenia += banco.charAt(Math.floor(Math.random() * banco.length));
        }
        const date= new Date()
        const hoy =  String(date.getDate()).padStart(2, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();
        const data = [bodyUser].map((el, index)=>({
            
                nombre: el.nombre,
                apellido: el.apellido, 
                codigo_empleado: (el.nombre.split("")[0]+el.apellido.split(" ")[0]+"-"+aleatoria).toLocaleLowerCase(), 
                contrasenia: contrasenia, 
                id_rol: el.id_rol, 
                id_empresa: 1, 
                created_at: hoy, ////
                updated_at: hoy, 
                direccion: el.direccion, 
                useraccess: (el.nombre.split("")[0]+el.apellido.split(" ")[0]+"-"+aleatoria).toLocaleLowerCase()
            
        }))
        const datos = await sequelize.query(
            `insert into usuario (nombre, apellido, codigo_empleado, contrasenia, id_rol, id_empresa, created_at, updated_at, direccion, useraccess)
             values (
                '${data.map(el=>el.nombre)}', 
                '${data.map(el=>el.apellido)}', 
                '${data.map(el=>el.codigo_empleado)}', 
                '${data.map(el=>el.contrasenia)}', 
                '${data.map(el=>el.id_rol)}', 
                '${data.map(el=>el.id_empresa)}', 
                '${data.map(el=>el.created_at)}', 
                '${data.map(el=>el.updated_at)}', 
                '${data.map(el=>el.direccion)}', 
                '${data.map(el=>el.useraccess)}'
                );`, { type: QueryTypes.SELECT });
        res.status(200).json({ data: datos })
    } catch (error) {
        console.log(error)
    }
}
const authUser = async (req, res) => {
    try {
        const {username, password}= req.body;
        const datos = await sequelize.query(`SELECT * FROM usuario where codigo_empleado = '${username}' AND contrasenia = '${password}'`, 
        { type: QueryTypes.SELECT });
        if(datos.length >0){
            res.status(200).send({msg:datos});
        }else{
            res.status(200).json({ data: 'usuario no existe' })
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    usuario, createusuario, authUser
} 