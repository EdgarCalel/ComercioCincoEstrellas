const express = require('express')
const router = express.Router()

//importaciones
const toto = require('./Usuario/index')

//routes
router.get('/', toto);

module.exports = router