const route = require('express').Router()
const ProductController = require('../controllers/product')
const Auth = require('../middlewares/auth')

route.get('/', ProductController.readProducts)
route.get('/:id', ProductController.productDetail)

route.use(Auth.authentication)
route.use('/:id', Auth.authorization)

route.post('/', ProductController.addProduct)
route.put('/:id', ProductController.updateProduct)
route.delete('/:id', ProductController.deleteProduct)

module.exports = route