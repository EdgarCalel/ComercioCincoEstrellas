const express = require('express')
const router = express.Router()

//importaciones
const {compras, createCompras, createComprasEncabezado, createComprasDetalle } = require('../controller/compras.controller')

//routes
router.get('/', compras);
router.post('/create', createComprasEncabezado)
router.post('/createDetalle', createComprasDetalle)


module.exports = router