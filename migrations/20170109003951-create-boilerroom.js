'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Boilerrooms', {
			boilerroom_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			farmer_id: {
				type: Sequelize.INTEGER
			},
			blacksmiths_copperbar: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			blacksmiths_ironbar: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			blacksmiths_goldbar: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			geologists_quartz: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			geologists_earthcrystal: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			geologists_frozentear: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			geologists_firequartz: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			adventurers_slime: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			adventurers_batwing: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			adventurers_solaressence: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			adventurers_voidessence: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Boilerrooms');
	}
};