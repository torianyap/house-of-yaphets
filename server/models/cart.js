'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {

    static associate(models) {
      Cart.belongsTo(models.User, {
        foreignKey: 'UserId',
        targetKey: 'id'
      })
      Cart.belongsTo(models.Product, {
        foreignKey: 'ProductId',
        targetKey: 'id'
      })
    }
  };
  Cart.init({
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Product id cannot be a null'
        },
        notEmpty: {
          args: true,
          msg: 'Procut id is required'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Product id cannot be a null'
        },
        notEmpty: {
          args: true,
          msg: 'Procut id is required'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Product id cannot be a null'
        },
        notEmpty: {
          args: true,
          msg: 'Procut id is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};