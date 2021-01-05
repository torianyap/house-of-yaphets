const route = require('express').Router()
const CartController  = require('../controllers/cart')
const Auth = require('../middlewares/auth')

route.use(Auth.authentication)

route.get('/', CartController.readCart)
route.post('/', CartController.updateCart)
route.delete('/checkout', CartController.checkout)

route.use('/:id', Auth.authorization)
route.delete('/:id', CartController.removeCart)

module.exports = route