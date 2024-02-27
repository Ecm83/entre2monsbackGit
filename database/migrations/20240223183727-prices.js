'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('prices', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      priceRestaurant: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      priceStore: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      priceCost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('prices');
  }
};
