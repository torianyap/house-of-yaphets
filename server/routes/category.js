const route = require('express').Router()
const CategoryController = require('../controllers/category')

route.get('/', CategoryController.readCategories)
route.post('/', CategoryController.addCategories)
route.delete('/:id', CategoryController.deleteCategories)

module.exports = route