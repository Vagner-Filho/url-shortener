const express = require('express')
const shortenUrl = require('../controller/url.js')

const router = express.Router();

// Todas as rotas aqui começam, implicitamente, com /url

router.post('/', shortenUrl)

module.exports = router;