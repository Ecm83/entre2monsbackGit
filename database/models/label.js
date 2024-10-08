"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    static associate(models) {
      // A label has many wines
      Label.belongsToMany(models.Wine, {
        through: "wines_labels",
        foreignKey: "labelId",
        otherKey: "wineId",
        as: "wines",
      });
    }
  }
  Label.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Label",
      tableName: "labels",
      timestamps: false,
    }
  );
  return Label;
};
