const path = require('path')
const express = require('express')

const usersController = require('../controllers/users') 

const router = express.Router()

// router.get('/user', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../views', '/party.html'))
    // render ejs data 
    // console.log('user')
// })

router.post('/', usersController.createUser)
router.get('/', usersController.getUsers)

router.get('/:id', usersController.getUser)

module.exports = router