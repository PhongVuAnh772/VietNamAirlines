"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    static associate(models) {}
  }
  airport.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      country_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      sequelize,
      modelName: "airport",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return airport;
};
