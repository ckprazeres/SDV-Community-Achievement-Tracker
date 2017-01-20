'use strict';
module.exports = function(sequelize, DataTypes) {
	var Farmer = sequelize.define('Farmer', {
		farmer_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		user_id: DataTypes.INTEGER,
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: /^[a-z0-9\_\- ]+$/i,
			}
		}
	}, {
		classMethods: {
			associate: function(models) {
				Farmer.hasOne(models.Boilerroom, {foreignKey: 'farmer_id', onDelete: 'cascade', hooks:true});
				Farmer.hasOne(models.Bulletinboard, {foreignKey: 'farmer_id', onDelete: 'cascade', hooks:true});
				Farmer.hasOne(models.Craftsroom, {foreignKey: 'farmer_id', onDelete: 'cascade', hooks:true});
				Farmer.hasOne(models.Fishtank, {foreignKey: 'farmer_id', onDelete: 'cascade', hooks:true});
				Farmer.hasOne(models.Pantry, {foreignKey: 'farmer_id', onDelete: 'cascade', hooks:true});
				Farmer.hasOne(models.Vault, {foreignKey: 'farmer_id', onDelete: 'cascade', hooks:true});
			}
		}
	});
	return Farmer;
};