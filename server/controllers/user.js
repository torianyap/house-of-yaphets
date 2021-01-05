const { User } = require('../models')
const { signToken } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')
 
class UserController {
  static async register (req, res, next) {
    try {
      const { username, email, password } = req.body

      const newUser = await User.create({
        username, email, password
      })

      const payload = {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username
      }

      const token = signToken(payload)
      res.status(201).json({
       access_token: token,
       user: payload 
      })
    } catch (error) {
      next(error)
    }
  }
  
  static async login (req, res, next) {
    const { email, password } = req.body

    const user = await User.findOne({
      where: {
        email
      }
    })

    if (!user) {
      throw { msg: 'email or password is incorrect', status: 401 }
    } else if (!compare(password, user.password)) {
      throw { msg: 'email or password is incorrect', status: 401 }
    } else {
      const payload = {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username
      }

      const token = signToken(payload)
      res.status(200).json({
        access_token: token,
        user: payload
      })
    }
  }
}

module.exports = UserController