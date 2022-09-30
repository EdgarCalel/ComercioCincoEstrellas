const express = require('express')
const router = express.Router()

//importaciones
const usuarios = require('./usuario.route')
const clientes = require('./cliente.route')
const proveedor = require('./proveedor.route')
const producto = require('./producto.route')
const compras = require('./Compras.route')
const ventas = require('./ventas.route')
const Roles = require('./rol.route')
const Caja = require('./caja.route')




//routes
router.use('/usuarios', usuarios);
router.use('/clientes', clientes);
router.use('/proveedor', proveedor);
router.use('/producto', producto);
router.use('/compras', compras);
router.use('/ventas', ventas);
router.use('/roles', Roles);
router.use('/caja', Caja);


module.exports = router