const route = require('express').Router()
const user_route = require('./user')
const product_route = require('./product')
const cart_route = require('./cart')
const category_route = require('./category')

route.use('/', user_route)
route.use('/products', product_route)
route.use('/carts', cart_route)
route.use('/categories', category_route)

module.exports = route