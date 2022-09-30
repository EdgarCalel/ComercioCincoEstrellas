const express = require('express')
const router = express.Router()

//importaciones
const {clientes, createClient } = require('../controller/clientes.controller')

//routes
router.get('/', clientes);
router.post('/create', createClient)

module.exports = router