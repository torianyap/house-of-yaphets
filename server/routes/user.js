const route = require('express').Router()
const UserController = require('../controllers/user')

route.post('/login', UserController.login)
route.post('/register', UserController.register)

module.exports = route