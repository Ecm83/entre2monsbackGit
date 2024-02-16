'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
      countrie: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      defaultValue: Sequelize.literal( 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' ),
      allowNull: false,
      type: Sequelize.DATE
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};