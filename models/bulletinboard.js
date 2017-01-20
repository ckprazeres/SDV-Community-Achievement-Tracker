'use strict';
module.exports = function(sequelize, DataTypes) {
	var Bulletinboard = sequelize.define('Bulletinboard', {
		bulletinboard_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		farmer_id: DataTypes.INTEGER,
		chefs_maplesyrup: DataTypes.BOOLEAN,
		chefs_fiddleheadfern: DataTypes.BOOLEAN,
		chefs_truffle: DataTypes.BOOLEAN,
		chefs_poppy: DataTypes.BOOLEAN,
		chefs_makiroll: DataTypes.BOOLEAN,
		chefs_friedegg: DataTypes.BOOLEAN,
		dye_redmushroom: DataTypes.BOOLEAN,
		dye_seaurchin: DataTypes.BOOLEAN,
		dye_sunflower: DataTypes.BOOLEAN,
		dye_duckfeather: DataTypes.BOOLEAN,
		dye_aquamarine: DataTypes.BOOLEAN,
		dye_redcabbage: DataTypes.BOOLEAN,
		fieldresearch_purplemushroom: DataTypes.BOOLEAN,
		fieldresearch_nautilusshell: DataTypes.BOOLEAN,
		fieldresearch_chub: DataTypes.BOOLEAN,
		fieldresearch_frozengeode: DataTypes.BOOLEAN,
		fodder_wheat: DataTypes.BOOLEAN,
		fodder_hay: DataTypes.BOOLEAN,
		fodder_apple: DataTypes.BOOLEAN,
		enchanters_oakresin: DataTypes.BOOLEAN,
		enchanters_wine: DataTypes.BOOLEAN,
		enchanters_rabbitsfoot: DataTypes.BOOLEAN,
		enchanters_pomegranate: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
			}
		}
	});
	return Bulletinboard;
};