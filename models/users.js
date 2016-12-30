'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    user_id: {
      type: DataTypes.INT,
      autoIncrement: true,
      primaryKey: true
    },
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};