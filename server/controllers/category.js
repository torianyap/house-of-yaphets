const { Category, Product } = require('../models')
const { Op } = require('sequelize')

class CategoryController {
  static async readCategories (req, res, next) {
    try {
      const categories = await Category.findAll({
        where : {
          title: {
            [Op.not]: 'PorkyUp'
          }
        }
      })
      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  }

  static async addCategories (req, res, next) {
    try {
      const { title, image } = req.body
      
      const newCategory = await Category.create({
        title, image
      })
      
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }

  static async deleteCategories (req, res, next) {
    try {
      const id = +req.params.id
      
      const destroyed = await Category.destroy({
        where: {
          id
        }
      })

      if (destroyed === 1) {
        res.status(200).json({ msg: `Category id ${id} has been deleted` })
      } else {
        throw { msg: 'category deletion failed', status: 404 }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CategoryController