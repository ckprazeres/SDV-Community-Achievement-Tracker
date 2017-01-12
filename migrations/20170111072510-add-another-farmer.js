'use strict';

var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    // var userAerophin;
    // var newFarmer;

    // return models.User.findOne({
    //   where: {
    //     user_id: 1
    //   }
    // })
    // .then(function(user) {
    //   userAerophin = user;
    // })
    // .then(function() {
    //   return models.Farmer.create(
    //     {
    //       name: 'Aeropi',
    //       Boilerroom: {},
    //       Bulletinboard: {},
    //       Craftsroom: {},
    //       Fishtank: {},
    //       Pantry: {},
    //       Vault: {}
    //     },
    //     {
    //       include:
    //         [
    //           models.Boilerroom,
    //           models.Bulletinboard,
    //           models.Craftsroom,
    //           models.Fishtank,
    //           models.Pantry,
    //           models.Vault
    //         ]
    //     }
    //   )
    // })
    // .then(function(farmer) {
    //   newFarmer = farmer;
    //   return userAerophin.addFarmer(newFarmer);
    // })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    // return models.Farmer.destroy({
    //   where: {
    //     name: 'Aeropi'
    //   }
    // })
  }
};
