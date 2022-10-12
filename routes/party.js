const path = require('path')

const express = require('express')

const router = express.Router()

router.get('/party', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', '/party.html'))
    console.log('PARTY')
})

module.exports = router