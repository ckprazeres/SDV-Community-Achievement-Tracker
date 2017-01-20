'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Fishtanks', {
			fishtank_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			farmer_id: {
				type: Sequelize.INTEGER
			},
			riverfish_sunfish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			riverfish_catfish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			riverfish_shad: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			riverfish_tigertrout: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			lakefish_largemouthbass: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			lakefish_carp: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			lakefish_bullhead: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			lakefish_sturgeon: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			oceanfish_sardine: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			oceanfish_tuna: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			oceanfish_redsnapper: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			oceanfish_tilapia: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			nightfishing_walleye: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			nightfishing_bream: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			nightfishing_eel: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_lobster: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_crayfish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_crab: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_cockle: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_mussel: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_shrimp: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_snail: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_periwinkle: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_oyster: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			crabpot_clam: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			specialtyfish_pufferfish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			specialtyfish_ghostfish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			specialtyfish_sandfish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			specialtyfish_woodskip: {
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
		return queryInterface.dropTable('Fishtanks');
	}
};