var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
	if(req.isAuthenticated()) {
		return models.Farmer.findAll({
			where: {
				user_id: req.user.dataValues.user_id,
			}
			// raw: true
		})
		.then(function(data) {
			var farmersList = { farmers: data };
			farmersList.title = "Farmers";
			console.log(farmersList);
			res.render('farmers', farmersList );
		})
	} else {
		res.redirect('/user/login');
	}
});

router.post('/add', function(req, res) {
	if(req.isAuthenticated()) {
		return models.Farmer.create({
				user_id: req.user.dataValues.user_id,
				name: req.body.name,
				Boilerroom: {},
				Bulletinboard: {},
				Craftsroom: {},
				Fishtank: {},
				Pantry: {},
				Vault: {}
			},
			{
				include:
					[
						models.Boilerroom,
						models.Bulletinboard,
						models.Craftsroom,
						models.Fishtank,
						models.Pantry,
						models.Vault
					]
			}
		)
		.then(function(newFarmer) {
			console.log('Farmer created: ' + newFarmer.dataValues.name);
			req.flash('success_msg', 'New farmer ' + newFarmer.dataValues.name + ' was created!');
			res.redirect('/user/farmers');
		})
	} else {
		res.redirect('/user/login');
	}
});

router.post('/delete/:id', function(req, res) {
	if(req.isAuthenticated()) {
		return models.Farmer.destroy({
			where: {
				farmer_id: req.params.id
			}
		})
		.then(function(farmer) {
			console.log('Farmer deleted');
			req.flash('success_msg', 'Farmer was successfully deleted!');
			res.redirect('/user/farmers');
		})
	} else {
		res.redirect('/user/login');
	}
});

router.post('/update/:id', function(req, res) {
	if(req.isAuthenticated()) {
		var user;
		var newFarmer;

		return models.User.findOne({
			where: {
				user_id: req.user.dataValues.user_id
			}
		})
		.then(function(userInfo) {
			user = userInfo;
		})
		.then(function() {
			return models.Farmer.findOne({
				where: {
					farmer_id: req.params.id
				}
			})
		})
		.then(function(farmerInfo) {
			newFarmer = farmerInfo;
			user.update({
				current_farmer_id: newFarmer.farmer_id,
				current_farmer_name: newFarmer.name
			})
		})
		.then(function(farmer) {
			console.log('Farmer updated');
			req.flash('success_msg', 'Farmer was successfully changed!');
			res.redirect('/user/farmers');
		})
	} else {
		res.redirect('/user/login');
	}
});

module.exports = router;