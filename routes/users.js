const path = require('path')
const express = require('express')

const usersController = require('../controllers/users') 

const router = express.Router()

router.post('/', usersController.createUser)
router.get('/', usersController.getUsers)
// router.get('/details', usersController.getUser)
router.get('/details/:userId', usersController.getUser)

router.post('/edit', usersController.postEditUsers) 
router.get('/edit/:userId', usersController.getEditUser)
module.exports = router