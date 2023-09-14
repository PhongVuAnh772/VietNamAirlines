"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    static associate(models) {
     
    }
  }
 country.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      country_name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName:  "country",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return country;
};
