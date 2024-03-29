'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    static associate(models) {

      // relacion de muchos a uno con cellar donde un cellar tine muchos vinos
      Wine.belongsTo(models.Cellar, {
        foreignKey: 'cellarId',
        as: 'cellar',
      })
      
      // relacion de uno a uno con stock donde un vino tiene un stock
      Wine.hasOne(models.Stock, {
        foreignKey: 'wineId',
        as: 'stock',
      })

      // wine has many grapes
      Wine.belongsToMany(models.Grape, {
        through: 'wine_grapes',
        foreignKey: 'wineId',
        otherKey: 'grapeId',
        as: 'grapes',
      })

      // wine has many icons
      Wine.belongsToMany(models.Icon, {
        through: 'wine_icons',
        foreignKey: 'wineId',
        otherKey: 'iconId',
        as: 'icons',
      })

      // wine has many wineTypes
      Wine.belongsToMany(models.WineType, {
        through: 'wine_wineTypes',
        foreignKey: 'wineId',
        otherKey: 'wineTypeId',
        as: 'wineTypes',
      })

      //wine has one sulphite
      Wine.belongsToMany(models.Sulphite, {
        through: 'wine_sulphites',
        foreignKey: 'wineId',
        otherKey: 'sulphiteId',
        as: 'sulphites',
      })
    }
  }
  Wine.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      wine: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      production: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vineyardAltitude: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cellarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cellars',
          key: 'id',
        },
      },
      stockId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'stocks',
          key: 'id',
        },
      },
      sulphiteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sulphites',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Wine',
      tableName: 'wines',
      timestamps: false,
    }
  )
  return Wine
}