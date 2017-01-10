'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Bulletinboards', {
      bulletinboard_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farmer_id: {
        type: Sequelize.INTEGER
      },
      bulletinboard_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_maplesyrup: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_fiddleheadfern: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_truffle: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_poppy: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_makiroll: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      chefs_friedegg: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_redmushroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_seaurchin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_sunflower: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_duckfeather: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_aquamarine: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dye_redcabbage: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fieldresearch_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fieldresearch_purplemushroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fieldresearch_nautilusshell: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fieldresearch_chub: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fieldresearch_frozengeode: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fodder_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fodder_wheat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fodder_hay: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fodder_apple: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      enchanters_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      enchanters_oakresin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      enchanters_wine: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      enchanters_rabbitsfoot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      enchanters_pomegranate: {
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
    return queryInterface.dropTable('Bulletinboards');
  }
};