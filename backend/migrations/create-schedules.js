"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("schedules", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      origin_iata_airport_code: {
        type: Sequelize.STRING,
        foreignKey: true,
        allowNull: false,
      },
      dest_iata_airport_code: {
        type: Sequelize.STRING,
        foreignKey: true,
        allowNull: false,
      },
      departure_time_gmt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      arrival_time_gmt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("schedules");
  },
};
