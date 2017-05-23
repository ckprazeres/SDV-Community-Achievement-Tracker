var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');
var connection = require('../config/connection.js');
var sequelize = new Sequelize(connection.connection.database, connection.connection.username, connection.connection.password, {
	host: connection.connection.host,
	port: connection.connection.port
});

// --------------------------------------------------------------------
// Functions
// --------------------------------------------------------------------

//Function to ensure farmer being updated belongs to current user (and
//has to be current farmer)
function isAuthenticated(req, res, callback){
	if(req.isAuthenticated()){
		var farmer_id = req.params.farmer_id;
		if (farmer_id == req.user.dataValues.current_farmer_id) {
			return callback();
		}
		else {
			res.redirect('/user/login');
		}
	} else {
		res.redirect('/user/login');
	}
}

// --------------------------------------------------------------------
// API Routes
// --------------------------------------------------------------------

//Get farmer's stats for bundles
router.get('/:table/:farmer_id', isAuthenticated, function(req, res) {
	var table = req.params.table;
	if (table == 'pantry') { table = 'Pantries' }
	else { table = table.charAt(0).toUpperCase() + table.slice(1) + 's'; }
	var farmer_id = req.params.farmer_id;

	sequelize.query("SELECT * FROM `" + table + "` WHERE `farmer_id`='" + farmer_id + "'")
	.spread(function(results, metadata) {
		res.send(results[0])
	})
})

//Update farmer's bundle item in database
router.get('/update/:table/:farmer_id/:field', isAuthenticated, function(req, res) {
	var table = req.params.table;
	if (table == 'pantry') { table = 'Pantries' }
	else { table = table.charAt(0).toUpperCase() + table.slice(1) + 's'; }
	var farmer_id = req.params.farmer_id;
	var field = req.params.field;
	var value = req.params.value;

	sequelize.query("SELECT * FROM `" + table + "` WHERE `farmer_id`='" + farmer_id + "'")
	.spread(function(results, metadata) {
		var data = results[0];

		if (data[field] == 0) {
			query = "UPDATE `" + table + "` SET `" + field + "`='1' WHERE `farmer_id`='" + farmer_id + "'";
			sequelize.query(query, { type: sequelize.QueryTypes.UPDATE})
			.then(function() {
				sequelize.query("SELECT * FROM `" + table + "` WHERE `farmer_id`='" + farmer_id + "'")
				.spread(function(results, metadata) {
					res.send(results[0]);
				})
			})
		}
		else if (data[field] == 1) {
			query = "UPDATE `" + table + "` SET `" + field + "`='0' WHERE `farmer_id`='" + farmer_id + "'";
			sequelize.query(query, { type: sequelize.QueryTypes.UPDATE})
			.then(function() {
				sequelize.query("SELECT * FROM `" + table + "` WHERE `farmer_id`='" + farmer_id + "'")
				.spread(function(results, metadata) {
					res.send(results[0]);
				})
			})
		}
	})
})

module.exports = router;