var express = require('express');
var router = express.Router();
var models = require('../models');

// --------------------------------------------------------------------
// Functions
// --------------------------------------------------------------------

function updateEmail(newEmail,userID, callback) {
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

// --------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------

router.get('/', function(req, res) {
	if(req.isAuthenticated()) {
			res.render('account', { title: 'Account Settings' });
		}
	else {
		res.redirect('/user/login');
	}
});

router.post('/email/update', function(req, res) {
	if(req.isAuthenticated()) {
		var newEmail = req.body.email;
		var userID = req.user.dataValues.user_id;

		updateEmail(newEmail, userID, function(err) {
			if(err) {
					console.log('ERROR OCCURED', err.errors[0].message);
					req.flash('error_msg', err.errors[0].message);
					res.redirect('/user/account');
				}
				else {
					console.log('Email updated');
					req.flash('success_msg', 'Email has been successfully updated!');
					res.redirect('/user/account');
				}
		})
	}
	else {
		res.redirect('/user/login');
	}
});

module.exports = router;