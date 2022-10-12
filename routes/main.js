const path = require('path')
const express = require('express')
const usersController = require('../controllers/users') 

const router = express.Router()

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', '/main.html'))
    console.log('Hello Main')
})

router.post('/party', usersController.postUsers)


module.exports = router