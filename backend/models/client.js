"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    static associate(models) {
     
    }
  }
 client.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Account_id: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      first_name: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      passport: {
        allowNull: false, 
        type: DataTypes.STRING,
      },
      country_id: {
        allowNull: false, 
        type: DataTypes.INTEGER,
                foreignKey: true

      }
    },
    {
      sequelize,
      modelName:  "client",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return client;
};
