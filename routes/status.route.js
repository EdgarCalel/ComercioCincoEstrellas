const express = require('express')
const router = express.Router()

//importaciones
const {status } = require('../controller/status.controller')

//routes
router.get('/', status);


module.exports = router