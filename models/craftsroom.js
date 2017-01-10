'use strict';
module.exports = function(sequelize, DataTypes) {
  var Craftsroom = sequelize.define('Craftsroom', {
    craftsroom_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    farmer_id: DataTypes.BOOLEAN,
    springforaging_completed: DataTypes.BOOLEAN,
    springforaging_daffodil: DataTypes.BOOLEAN,
    springforaging_leek: DataTypes.BOOLEAN,
    springforaging_dandelion: DataTypes.BOOLEAN,
    summerforaging_completed: DataTypes.BOOLEAN,
    summerforaging_grape: DataTypes.BOOLEAN,
    summerforaging_spiceberry: DataTypes.BOOLEAN,
    summerforaging_sweetpea: DataTypes.BOOLEAN,
    fallforaging_completed: DataTypes.BOOLEAN,
    fallforaging_commonmushroom: DataTypes.BOOLEAN,
    fallforaging_wildplum: DataTypes.BOOLEAN,
    fallforaging_hazelnut: DataTypes.BOOLEAN,
    fallforaging_blackberry: DataTypes.BOOLEAN,
    winterforaging_completed: DataTypes.BOOLEAN,
    winterforaging_winterroot: DataTypes.BOOLEAN,
    winterforaging_crystalfruit: DataTypes.BOOLEAN,
    winterforaging_snowyam: DataTypes.BOOLEAN,
    winterforaging_crocus: DataTypes.BOOLEAN,
    construction_completed: DataTypes.BOOLEAN,
    construction_wood: DataTypes.BOOLEAN,
    construction_wood2: DataTypes.BOOLEAN,
    construction_stone: DataTypes.BOOLEAN,
    construction_hardwood: DataTypes.BOOLEAN,
    exotic_completed: DataTypes.BOOLEAN,
    exotic_cocount: DataTypes.BOOLEAN,
    exotic_cactusfruit: DataTypes.BOOLEAN,
    exotic_cavecarrot: DataTypes.BOOLEAN,
    exotic_redmushroom: DataTypes.BOOLEAN,
    exotic_purplemushroom: DataTypes.BOOLEAN,
    exotic_maplesyrup: DataTypes.BOOLEAN,
    exotic_oakresin: DataTypes.BOOLEAN,
    exotic_pinetar: DataTypes.BOOLEAN,
    exotic_morel: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Craftsroom;
};