'use strict';
module.exports = function(sequelize, DataTypes) {
	var Vault = sequelize.define('Vault', {
		vault_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		farmer_id: DataTypes.INTEGER,
		vault_2500: DataTypes.BOOLEAN,
		vault_5000: DataTypes.BOOLEAN,
		vault_10000: DataTypes.BOOLEAN,
		vault_25000: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
			}
		}
	});
	return Vault;
};