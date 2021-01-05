'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.belongsToMany(models.Product, {
        through: models.Cart
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'username cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'username cannot be empty'
        },
        len: {
          args: [3,15],
          msg: 'Username must be a minimal of 3 and a maximum of 15 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'email cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'must be a valid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'username cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'username cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate (user, options) {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};