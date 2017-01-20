'use strict';
module.exports = function(sequelize, DataTypes) {
	var Boilerroom = sequelize.define('Boilerroom', {
		boilerroom_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		farmer_id: DataTypes.INTEGER,
		blacksmiths_copperbar: DataTypes.BOOLEAN,
		blacksmiths_ironbar: DataTypes.BOOLEAN,
		blacksmiths_goldbar: DataTypes.BOOLEAN,
		geologists_quartz: DataTypes.BOOLEAN,
		geologists_earthcrystal: DataTypes.BOOLEAN,
		geologists_frozentear: DataTypes.BOOLEAN,
		geologists_firequartz: DataTypes.BOOLEAN,
		adventurers_slime: DataTypes.BOOLEAN,
		adventurers_batwing: DataTypes.BOOLEAN,
		adventurers_solaressence: DataTypes.BOOLEAN,
		adventurers_voidessence: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
			}
		}
	});
	return Boilerroom;
};