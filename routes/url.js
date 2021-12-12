const express = require('express')
const { shortenUrl, getAllUrls, incrementVisits } = require('../controller/url.js')

const router = express.Router();

// Todas as rotas aqui começam, implicitamente, com /url

router.post('/', shortenUrl)
router.get('/urls', getAllUrls)
router.post('/urls', incrementVisits)

module.exports = router;