const express = require('express')
const router = express.Router()

//importaciones
const {ventas, createventasEncabezado, createventasDetalle } = require('../controller/ventas.controller')

//routes
router.get('/', ventas);
router.post('/create', createventasEncabezado)
router.post('/createDetalle', createventasDetalle)


module.exports = router