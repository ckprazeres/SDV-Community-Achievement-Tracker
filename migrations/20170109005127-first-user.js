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

    var newChara;
    var newFarmer;

    return models.User.create({
        username: 'aerophin', 
        email: 'aerophin@gmail.com'
    })
    .then(function(chara) {
      newChara = chara;
    })
    .then(function() {
      return models.Farmer.create({
        name: 'Cherri'
      })
    })
    .then(function(farmer) {
      newFarmer = farmer;
      return newChara.addFarmer(newFarmer);
    })
    .then(function() {
      return models.Craftsroom.create();
    })
    .then(function(craftsroom) {
      return newFarmer.setCraftsroom(craftsroom);
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return models.User.destroy({
      where: {
        username: 'aerophin'
      }
    });
  }
};
