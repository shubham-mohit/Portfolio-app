const express = require('express')
const { emailForm } = require('../controller/portController')
const router = express.Router()


router.post('/sendEmail', emailForm )

module.exports = router