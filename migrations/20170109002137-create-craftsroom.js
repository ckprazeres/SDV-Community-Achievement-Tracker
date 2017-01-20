'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Craftsrooms', {
			craftsroom_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			farmer_id: {
				type: Sequelize.INTEGER
			},
			springforaging_wildhorseradish: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			springforaging_daffodil: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			springforaging_leek: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			springforaging_dandelion: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			summerforaging_grape: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			summerforaging_spiceberry: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			summerforaging_sweetpea: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			fallforaging_commonmushroom: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			fallforaging_wildplum: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			fallforaging_hazelnut: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			fallforaging_blackberry: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			winterforaging_winterroot: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			winterforaging_crystalfruit: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			winterforaging_snowyam: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			winterforaging_crocus: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			construction_wood: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			construction_wood2: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			construction_stone: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			construction_hardwood: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_cocount: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_cactusfruit: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_cavecarrot: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_redmushroom: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_purplemushroom: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_maplesyrup: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_oakresin: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_pinetar: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			exotic_morel: {
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
		return queryInterface.dropTable('Craftsrooms');
	}
};