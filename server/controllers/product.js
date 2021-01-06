const { Product, Category } = require('../models')

class ProductController {
  static async readProducts (req, res, next) {
    const filter = req.query

    try {
      const products = await Product.findAll({
        order: [['id', 'asc']],
        where: filter,
        include: Category
      })
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  }

  static async productDetail (req, res, next) {
    try {
      const id = +req.params.id
      const product = await Product.findByPk(id)

      if (!product) {
        throw { msg: 'Product not found', status: 404 }
      } else {
        res.status(200).json(product)
      }
    } catch (error) {
      next(error)
    }
  }

  static async addProduct (req, res, next) {
    try {
      const { title, image, weight, price, stock, content_info, content_nutrition, content_steps, CategoryId } = req.body

      const newProduct = await Product.create({
        title, image, weight, price, stock, content_info, content_nutrition, content_steps, CategoryId
      })
      res.status(201).json(newProduct)

    } catch (error) {
      next(error)
    }
  }

  static async updateProduct (req, res, next) {
    try {
      const id = +req.params.id
      const { title, image, weight, price, stock, content_info, content_nutrition, content_steps, CategoryId } = req.body

      const payload = { title, image, weight, price, stock, content_info, content_nutrition, content_steps, CategoryId }

      const updatedProduct = await Product.update(payload, {
        where: {
          id
        },
        returning: true
      })

      if (updatedProduct[0] !== 1) {
        throw { msg: 'Update failed', status: 404 }
      } else {
        res.status(200).json(updatedProduct[1][0])
      }
      
    } catch (error) {
      next(error)
    }
  }

  static async deleteProduct (req, res, next) {
    try {
      const id = +req.params.id
      const deletedProduct = await Product.destroy({
        where: {
          id
        }
      })
      if (deletedProduct !== 1) {
        throw { msg: 'Delete Failed', status: 404 }
      } else {
        res.status(200).json({ msg: `Product with id ${id} is successfully deleted` })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ProductController