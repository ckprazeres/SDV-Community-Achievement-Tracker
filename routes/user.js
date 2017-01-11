var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var models = require('../models');

// --------------------------------------------------------------------
// Functions
// --------------------------------------------------------------------

function createUser(newUser, callback) {
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

function getUserByUsername(username, callback) {
	var query = {username: username};
	User.findOne(query, callback);
}

function getUserById(id, callback) {
	User.findById(id, callback);
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
		res.redirect('/user/login');
	} else {
		req.flash('error_msg', 'You are not logged in.');
		res.redirect('/user/login'));
	}
});

//Show user's farmers
router.get('/farmers', function(req, res) {
	if(req.isAuthenticated()) {
		res.render('farmers', { title: 'Farmers' });
	} else {
		req.flash('error_msg', 'You are not logged in.');
		res.redirect('/user/login'));
	}
});

//Show user account settings
router.get('/account', function(req, res) {
	if(req.isAuthenticated()) {
		res.render('account', { title: 'Account Settings' });
	} else {
		req.flash('error_msg', 'You are not logged in.');
		res.redirect('/user/login'));
	}
});

// --------------------------------------------------------------------
// Post Routes (Sign Up/Login)
// --------------------------------------------------------------------

// Sign Up User
router.post('/signup', function(req, res) {
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors) {
		res.render('signup', { errors: errors });
	} else {
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password
		});

		models.User.createUser(newUser, function(err, user) {
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');
		res.redirect('/user/login');
	}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user) {
   	if(err) throw err;
   	if(!user) {
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch) {
   		if(err) throw err;
   		if(isMatch) {
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'/bundles/dashboard', failureRedirect:'/user/login',failureFlash: true}),
  function(req, res) {
    res.redirect('/dashboard');
});

module.exports = router;