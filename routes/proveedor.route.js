const express = require('express')
const router = express.Router()

//importaciones
const {proveedores, createProveedor } = require('../controller/proveedor.controller')

//routes
router.get('/', proveedores);
router.post('/create', createProveedor)

module.exports = router