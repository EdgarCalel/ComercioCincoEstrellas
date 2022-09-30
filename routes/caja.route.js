const express = require('express')
const router = express.Router()

//importaciones
const {caja, createCaja } = require('../controller/caja.controller')

//routes
router.get('/', caja);
router.post('/create', createCaja)

module.exports = router