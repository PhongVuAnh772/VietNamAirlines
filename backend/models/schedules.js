"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    static associate(models) {}
  }
  schedules.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      origin_iata_airport_code: {
        type: DataTypes.STRING,
        foreignKey: true,
        allowNull: false,
      },
      dest_iata_airport_code: {
        type: DataTypes.STRING,
        foreignKey: true,
        allowNull: false,
      },
      departure_time_gmt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      arrival_time_gmt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    },
    {
      sequelize,
      modelName: "schedules",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return schedules;
};
