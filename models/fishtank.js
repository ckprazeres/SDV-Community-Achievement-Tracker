'use strict';
module.exports = function(sequelize, DataTypes) {
	var Fishtank = sequelize.define('Fishtank', {
		fishtank_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		farmer_id: DataTypes.INTEGER,
		riverfish_sunfish: DataTypes.BOOLEAN,
		riverfish_catfish: DataTypes.BOOLEAN,
		riverfish_shad: DataTypes.BOOLEAN,
		riverfish_tigertrout: DataTypes.BOOLEAN,
		lakefish_largemouthbass: DataTypes.BOOLEAN,
		lakefish_carp: DataTypes.BOOLEAN,
		lakefish_bullhead: DataTypes.BOOLEAN,
		lakefish_sturgeon: DataTypes.BOOLEAN,
		oceanfish_sardine: DataTypes.BOOLEAN,
		oceanfish_tuna: DataTypes.BOOLEAN,
		oceanfish_redsnapper: DataTypes.BOOLEAN,
		oceanfish_tilapia: DataTypes.BOOLEAN,
		nightfishing_walleye: DataTypes.BOOLEAN,
		nightfishing_bream: DataTypes.BOOLEAN,
		nightfishing_eel: DataTypes.BOOLEAN,
		crabpot_lobster: DataTypes.BOOLEAN,
		crabpot_crayfish: DataTypes.BOOLEAN,
		crabpot_crab: DataTypes.BOOLEAN,
		crabpot_cockle: DataTypes.BOOLEAN,
		crabpot_mussel: DataTypes.BOOLEAN,
		crabpot_shrimp: DataTypes.BOOLEAN,
		crabpot_snail: DataTypes.BOOLEAN,
		crabpot_periwinkle: DataTypes.BOOLEAN,
		crabpot_oyster: DataTypes.BOOLEAN,
		crabpot_clam: DataTypes.BOOLEAN,
		specialtyfish_pufferfish: DataTypes.BOOLEAN,
		specialtyfish_ghostfish: DataTypes.BOOLEAN,
		specialtyfish_sandfish: DataTypes.BOOLEAN,
		specialtyfish_woodskip: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
			}
		}
	});
	return Fishtank;
};