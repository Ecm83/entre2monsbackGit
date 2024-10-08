"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
      // one price has one stocks
      Price.hasOne(models.Stock, {
        foreignKey: "priceId",
        as: "prices",
      });
    }
  }
  Price.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      costPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      sellPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Price",
      tableName: "prices",
      timestamps: false,
    }
  );
  return Price;
};
