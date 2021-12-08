const express = require('express')
const { createUser, logUserIn, getUsers } = require('../controller/user.js')

const router = express.Router();

// Todas as rotas aqui começam, implicitamente, com /user
router.post('/', logUserIn)
router.post('/create', createUser)
router.get('/users', getUsers)


module.exports = router;