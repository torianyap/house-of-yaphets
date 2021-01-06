'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.hasMany(models.Product)
    }
  };
  Category.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'title is required'
        },
        notEmpty: {
          args: true,
          msg: 'title cannot be empty'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'image is required'
        },
        notEmpty: {
          args: true,
          msg: 'image cannot be empty'
        },
        isUrl: {
          args: true,
          msg: 'image must be an url'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};