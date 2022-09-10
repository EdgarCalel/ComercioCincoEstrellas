const express = require('express')
const router = express.Router()

//importaciones
const {usuario } = require('../../controller/usuario.controller')

//routes
router.get('/', usuario);

module.exports = router