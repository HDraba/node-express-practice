const path = require('path')
const express = require('express')

const birdsController = require('../controllers/birds')

const router = express.Router()

router.get('/', birdsController.renderBirds)

module.exports = router