const express = require('express')
const router = express.Router()

//importaciones
const {roles, createRol } = require('../controller/roles.controller')

//routes
router.get('/', roles);
router.post('/create', createRol)

module.exports = router