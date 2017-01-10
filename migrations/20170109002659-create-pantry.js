'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Pantries', {
      pantry_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farmer_id: {
        type: Sequelize.INTEGER
      },
      pantry_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      springcrops_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      springcrops_parsnip: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      springcrops_greenbean: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      springcrops_cauliflower: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      springcrops_potato: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      summercrops_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      summercrops_tomato: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      summercrops_hotpepper: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      summercrops_blueberry: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      summercrops_melon: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fallcrops_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fallcrops_corn: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fallcrops_eggplant: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fallcrops_pumpkin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      fallcrops_yam: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      qualitycrops_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      qualitycrops_parsnip: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      qualitycrops_melon: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      qualitycrops_pumpkin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      qualitycrops_corn: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_milk: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_egg_brown: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_egg_white: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_goatmilk: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_wool: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      animal_duckegg: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_truffleoil: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_cloth: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_goatcheese: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_cheese: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_honey: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_jelly: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_apple: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_apricot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_orange: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_peach: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_pomegranate: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      artisan_cherry: {
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
    return queryInterface.dropTable('Pantries');
  }
};