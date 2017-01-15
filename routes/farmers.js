var express = require('express');
var router = express.Router();
var models = require('../models');

// --------------------------------------------------------------------
// Functions
// --------------------------------------------------------------------

function addFarmer(farmerName,userID, callback) {
	return models.User.update({
		email: newEmail
	},
	{
		where: {
			user_id: userID
		}
	})
	.then(function() {
		callback();
	})
	.catch(function(err) {
		console.log('Sequelize error: ', err);

		if (err.errors[0].message == "email must be unique") {
			err.errors[0].message = "There is already an account with that email. Please use a different email."
		}
		else {
			err.errors[0].message = "Something went wrong. Error on field <code>" + err.errors[0].path + "</code> with reason <code>" + err.errors[0].message + "</code>. Please send this message to the admin."
		}

		callback(err);
	})
}

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
			models.User.update(
				{
					current_farmer_id: newFarmer.dataValues.farmer_id,
					current_farmer_name: newFarmer.dataValues.name
				},
				{
					where: {
						user_id: req.user.dataValues.user_id
					}
				}
			)

			return newFarmer.dataValues.name
		})
		.then(function(farmerName) {
			console.log('Farmer created: ', farmerName);
			req.flash('success_msg', 'New farmer was created! Your current farmer is now <strong><em>' + farmerName + '</em></strong>.');
			res.redirect('/user/farmers');
		})
		.catch(function(err) {
			console.log('Sequelize error: ', err);

			if (err.errors[0].path == "name" && err.errors[0].message == "Validation is failed") {
				err.errors[0].message = "Your farmer's name has invalid characters. Farmer names can contain letters (A-Z), numbers (0-9), underscores (_), dashes (-), and spaces ( ) only."
			}
			else {
				err.errors[0].message = "Something went wrong. Error on field <code>" + err.errors[0].path + "</code> with reason <code>" + err.errors[0].message + "</code>. Please send this message to the admin."
			}

			req.flash('error_msg', err.errors[0].message);
			res.redirect('/user/farmers');
		})
	} else {
		res.redirect('/user/login');
	}
});

router.post('/delete/:id', function(req, res) {
	if(req.isAuthenticated()) {
		var farmerID = req.params.id;

		if(req.user.dataValues.current_farmer_id == farmerID) {
			req.flash('error_msg', 'Can\'t delete the current farmer. Please switch to a different farmer before you delete <strong><em>' + req.user.dataValues.current_farmer_name + '</em></strong>.');
			res.redirect('/user/farmers');
		}
		else {
			models.Farmer.destroy({
				where: {
					farmer_id: farmerID
				}
			})
			.then(function() {
				models.Boilerroom.destroy({
					where: {
						farmer_id: farmerID
					}
				})
			})
			.then(function() {
				models.Bulletinboard.destroy({
					where: {
						farmer_id: farmerID
					}
				})
			})
			.then(function() {
				models.Craftsroom.destroy({
					where: {
						farmer_id: farmerID
					}
				})
			})
			.then(function() {
				models.Fishtank.destroy({
					where: {
						farmer_id: farmerID
					}
				})
			})
			.then(function() {
				models.Pantry.destroy({
					where: {
						farmer_id: farmerID
					}
				})
			})
			.then(function() {
				models.Vault.destroy({
					where: {
						farmer_id: farmerID
					}
				})
			})
			.then(function() {
				console.log('Farmer deleted');
				req.flash('success_msg', 'Farmer was successfully deleted!');
				res.redirect('/user/farmers');
			})
		}
	} else {
		res.redirect('/user/login');
	}
});

router.post('/update/:id', function(req, res) {
	if(req.isAuthenticated()) {
		var farmerID = req.params.id;

		return models.Farmer.findOne({
			where: {
				farmer_id: farmerID
			}
		})
		.then(function(farmerInfo) {
			var newFarmer = farmerInfo;

			models.User.update(
				{
					current_farmer_id: newFarmer.farmer_id,
					current_farmer_name: newFarmer.name
				},
				{
					where: {
						user_id: req.user.dataValues.user_id
					}
				}
			)

			return newFarmer.dataValues.name
		})
		.then(function(farmerName) {
			console.log('Farmer updated ', farmerName);
			req.flash('success_msg', 'Current farmer was successfully changed to <strong><em>' + farmerName + '</em></strong>!');
			res.redirect('/user/farmers');
		})
	} else {
		res.redirect('/user/login');
	}
});

module.exports = router;