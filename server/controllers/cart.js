const { Cart, Product } = require('../models')

class CartController {
  static async readCart (req, res, next) {
    try {
      const UserId = +req.userLoggedIn.id
      const cart = await Cart.findAll({
        where: {
          UserId
        },
        attributes: ['id', 'UserId', 'ProductId', 'quantity'],
        include: Product
      })
      res.status(200).json(cart)

    } catch (error) {
      next(error)
    }
  }

  static async updateCart (req, res, next) {
    try {
      const UserId = +req.userLoggedIn.id
      const { ProductId, quantity } = req.body

      const cart = await Cart.findOne({
        where: {
          UserId,
          ProductId
        }
      })
      const { stock } = Product.findByPk(ProductId)

      if (!cart) {
        const newCart = await Cart.create({
          UserId, ProductId, quantity: 1
        })
        res.status(200).json(newCart)
      } else {
        if (stock < (cart.quantity + quantity)) {
          throw { status: 400, msg: 'Stock Limit Reached' }
        } else {
          const updatedCart = await Cart.increment('quantity', {
            by: +quantity,
            where: {
              UserId,
              ProductId
            },
            returning: true
          })
          if (updatedCart[0][1] !== 1) {
            throw { status: 404, msg: 'cart update failed' }
          } else {
            res.status(200).json(updatedCart[0][0][0])
          }
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async removeCart (req, res, next) {
    try {
      const id = +req.params.id
      const deletedCart = await Cart.destroy({
        where: {
          id
        }
      })
      if (deletedCart !== 1) {
        throw { msg: 'cart deletion failed', status: 404 }
      } else {
        res.status(200).json({ msg: `Cart id ${id} has been removed` })
      }
    } catch (error) {
      next(error)
    }
  }

  static async checkout (req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CartController