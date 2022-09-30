const express = require('express')
const router = express.Router()

//importaciones
const {usuario, createusuario, authUser } = require('../controller/usuario.controller')

//routes
router.get('/', usuario);
router.post('/create', createusuario);
router.post('/auth', authUser);


module.exports = router