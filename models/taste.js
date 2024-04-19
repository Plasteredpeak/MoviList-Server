"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Taste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Taste.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  Taste.init(
    {
      reviews: DataTypes.INTEGER,
      compatibility: DataTypes.FLOAT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Taste",
    }
  );
  return Taste;
};
