var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var models = require('../models');

// --------------------------------------------------------------------
// Functions
// --------------------------------------------------------------------
function hashPassword(newUser, callback) {
	bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(newUser.password, salt, function(err, hash) {
					newUser.password = hash;
					callback();
			});
	});
}

//Function to rewrite Sequelize errors when signing up
function rewriteErrors(err, callback) {
	if(err.errors[0].message == "username must be unique") {
		err.errors[0].message = "Sorry! That username is already taken."
	}
	else if (err.errors[0].message == "email must be unique") {
		err.errors[0].message = "There is already an account with that email. Please <a href='/user/login'>log in</a>."
	}
	else if (err.errors[0].path == "username" && err.errors[0].message == "Validation is failed") {
		err.errors[0].message = "Your username has invalid characters. Usernames can contain letters (A-Z), numbers (0-9), underscores (_), and dashes (-) only."
	}
	else if (err.errors[0].path == "name" && err.errors[0].message == "Validation is failed") {
		err.errors[0].message = "Your farmer's name has invalid characters. Farmer names can contain letters (A-Z), numbers (0-9), underscores (_), dashes (-), and spaces ( ) only."
	}
	else {
		err.errors[0].message = "Something went wrong. Error on field <code>" + err.errors[0].path + "</code> with reason <code>" + err.errors[0].message + "</code>. Please send this message to the admin."
	}

	callback(err);
}

function createUser(newUser, callback) {
	//Variables for sequelize
		var newChara;
		var newFarmer;

		//Create new user, farmer, and bundles in database
		return models.User.create({
				username: newUser.username,
				email: newUser.email,
				password: newUser.password
		})
		.then(function(chara) {
			newChara = chara;
		})
		.then(function() {
			return models.Farmer.create(
				{
					name: newUser.farmer,
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
		})
		.then(function(farmer) {
			newFarmer = farmer;

			newChara.addFarmer(newFarmer);

			newChara.update({
				current_farmer_id: newFarmer.farmer_id,
				current_farmer_name: newFarmer.name
			});
			
			callback();
		})
		.catch(function(err) {
			console.log('Sequelize error: ', err);
			rewriteErrors(err, function(err) {
				callback(err);
			});
		})
}

function getUserByUsername(username, callback) {
	var query = {username: username};
	return models.User.findOne({where: query})
	.then(function(user) {
		callback(null, user);
	})
}

function comparePassword(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
			if(err) throw err;
			callback(null, isMatch);
	});
}

// --------------------------------------------------------------------
// Get Routes
// --------------------------------------------------------------------

router.get('/', function(req, res) {
	res.redirect('/user/login')
})

// Sign Up
router.get('/signup', function(req, res) {
	if(req.isAuthenticated()) {
		res.redirect('/user/account');
	} else {
		res.render('signup', { title: 'Sign Up' });
	}
});

// Login
router.get('/login', function(req, res) {
	if(req.isAuthenticated()) {
		res.redirect('/user/account');
	} else {
		res.render('login', { title: 'Login' });
	}
});


//Logout
router.get('/logout', function(req, res) {
	if(req.isAuthenticated()) {
		req.logout();

		req.flash('success_msg', 'You are now logged out.');
		res.redirect('/');
	} else {
		res.redirect('/user/login');
	}
});

// --------------------------------------------------------------------
// Post Routes (Sign Up/Login)
// --------------------------------------------------------------------

// Sign Up User
router.post('/signup', function(req, res) {
	var email = req.body.email;
	var username = req.body.username;
	var farmer = req.body.farmer;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('email', 'Email is required.').notEmpty();
	req.checkBody('email', 'Email is not valid.').isEmail();
	req.checkBody('farmer', 'Farmer\'s name is required').notEmpty();
	req.checkBody('username', 'Username is required.').notEmpty();
	req.checkBody('password', 'Password is required.').notEmpty();
	req.checkBody('password2', 'Passwords do not match.').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors) {
		res.render('signup', { title: 'Sign Up', error: errors[0].msg});
	} else {
		var newUser = {
			username: username,
			email: email,
			farmer: farmer,
			password: password
		};

		hashPassword(newUser, function(err, user) {
			if(err) throw err;
			createUser(newUser, function(err) {
				if(err) {
					console.log('ERROR OCCURED', err.errors[0].message);
					req.flash('error_msg', err.errors[0].message);
					res.redirect('/user/signup');
				}
				else {
					console.log('New user created: ' + newUser.username);

					req.flash('success_msg', 'You are registered and can now login.');
					res.redirect('/user/login');
				}
			});
		});

	}
});

passport.use(new LocalStrategy(
	function(username, password, done) {
		getUserByUsername(username, function(err, user) {
			if(err) throw err;
			if(!user) {
				return done(null, false, {message: 'This user account doesn\'t exist! Please <a href="/user/signup">sign up</a> first.'});
		}

		comparePassword(password, user.dataValues.password, function(err, isMatch) {
			if(err) throw err;
			if(isMatch) {
				return done(null, user);
			} else {
				return done(null, false, {message: 'Wrong password! Try again.'});
			}
		});
	 });
	})
);

passport.serializeUser(function(user, done) {
	done(null, user.dataValues.user_id);
});

passport.deserializeUser(function(id, done) {
	models.User.find({where: {user_id: id}}).then(function(user){
		done(null, user);
	}).error(function(err){
		done(err, null);
	});
});

router.post('/login',
	passport.authenticate('local', {successRedirect:'/bundles/dashboard', failureRedirect:'/user/login', failureFlash: true})
);

module.exports = router;