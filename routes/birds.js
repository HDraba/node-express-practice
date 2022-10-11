const path = require('path')

const express = require('express')

const router = express.Router()

router.get('/birds', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', '/birds.html'))
    console.log('Hello?')
})

module.exports = router