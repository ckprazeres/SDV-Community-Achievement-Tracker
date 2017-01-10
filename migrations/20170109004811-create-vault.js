'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Vaults', {
      vault_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farmer_id: {
        type: Sequelize.INTEGER
      },
      vault_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      vault_2500: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      vault_5000: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      vault_10000: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      vault_25000: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Vaults');
  }
};