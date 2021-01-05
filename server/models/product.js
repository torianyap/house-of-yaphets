'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      Product.belongsTo(models.Category)
      
      Product.belongsToMany(models.User, {
        through: models.Cart
      })
    }
  };
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title is required'
        },
        notEmpty: {
          args: true,
          msg: 'Title cant be empty'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Image is required'
        },
        notEmpty: {
          args: true,
          msg: 'Image cant be empty'
        },
        isUrl: {
          args: true,
          msg: 'image must be an url'
        }
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Weight is required'
        },
        notEmpty: {
          args: true,
          msg: 'Weight cannot be empty'
        },
        isNumeric: {
          args: true,
          msg: 'Weight must be a number' 
        },
        isMinus (value) {
          if (value < 0) {
            throw new Error(`Weight cannot be a minus`)
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required'
        },
        notEmpty: {
          args: true,
          msg: 'Price cannot be empty'
        },
        isNumeric: {
          args: true,
          msg: 'Price must be a number'
        },
        isMinus (value) {
          if (value < 0) {
            throw new Error(`Price cannot be a minus`)
          }
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Stock is required'
        },
        notEmpty: {
          args: true,
          msg: 'Stock cannot be empty'
        },
        isNumeric: {
          args: true,
          msg: 'Stock must be a number'
        },
        isMinus (value) {
          if (value < 0) {
            throw new Error(`Stock cannot be a minus`)
          }
        }
      }
    },
    content_info: {
      type: DataTypes.STRING
    },
    content_nutrition: {
      type: DataTypes.STRING
    },
    content_steps: {
      type: DataTypes.STRING
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'category required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};