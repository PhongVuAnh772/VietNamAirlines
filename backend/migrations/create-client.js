"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("client", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      Account_id: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      first_name: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      passport: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      country_id: {
        allowNull: false, 
        type: Sequelize.INTEGER,
        foreignKey: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("client");
  },
};
