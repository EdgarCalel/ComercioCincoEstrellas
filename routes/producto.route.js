const express = require('express')
const router = express.Router()

//importaciones
const {producto, createProducto } = require('../controller/producto.controller')

//routes
router.get('/', producto);
router.post('/create', createProducto)

module.exports = router