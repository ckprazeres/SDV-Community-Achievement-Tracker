'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define('Pantry', {
		pantry_id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  allowNull: false,
		  autoIncrement: true
		},
		farmer_id: DataTypes.INTEGER,
		springcrops_parsnip: DataTypes.BOOLEAN,
		springcrops_greenbean: DataTypes.BOOLEAN,
		springcrops_cauliflower: DataTypes.BOOLEAN,
		springcrops_potato: DataTypes.BOOLEAN,
		summercrops_tomato: DataTypes.BOOLEAN,
		summercrops_hotpepper: DataTypes.BOOLEAN,
		summercrops_blueberry: DataTypes.BOOLEAN,
		summercrops_melon: DataTypes.BOOLEAN,
		fallcrops_corn: DataTypes.BOOLEAN,
		fallcrops_eggplant: DataTypes.BOOLEAN,
		fallcrops_pumpkin: DataTypes.BOOLEAN,
		fallcrops_yam: DataTypes.BOOLEAN,
		qualitycrops_parsnip: DataTypes.BOOLEAN,
		qualitycrops_melon: DataTypes.BOOLEAN,
		qualitycrops_pumpkin: DataTypes.BOOLEAN,
		qualitycrops_corn: DataTypes.BOOLEAN,
		animal_milk: DataTypes.BOOLEAN,
		animal_egg_brown: DataTypes.BOOLEAN,
		animal_egg_white: DataTypes.BOOLEAN,
		animal_goatmilk: DataTypes.BOOLEAN,
		animal_wool: DataTypes.BOOLEAN,
		animal_duckegg: DataTypes.BOOLEAN,
		artisan_truffleoil: DataTypes.BOOLEAN,
		artisan_cloth: DataTypes.BOOLEAN,
		artisan_goatcheese: DataTypes.BOOLEAN,
		artisan_cheese: DataTypes.BOOLEAN,
		artisan_honey: DataTypes.BOOLEAN,
		artisan_jelly: DataTypes.BOOLEAN,
		artisan_apple: DataTypes.BOOLEAN,
		artisan_apricot: DataTypes.BOOLEAN,
		artisan_orange: DataTypes.BOOLEAN,
		artisan_peach: DataTypes.BOOLEAN,
		artisan_pomegranate: DataTypes.BOOLEAN,
		artisan_cherry: DataTypes.BOOLEAN
	  }, {
	classMethods: {
	  associate: function(models) {
		// associations can be defined here
	  }
	}
  });
  return Pantry;
};