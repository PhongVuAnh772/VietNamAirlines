"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("airport", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      country_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("airport");
  },
};
