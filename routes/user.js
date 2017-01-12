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
    })
    .then(callback)
   //  .catch(function(err) {
			// if(err) { return console.log(err.errors[0].message) }
   //  })
    // .then(function(err_msg) {
    // 	callback(err_msg);
    // })
}

function getUserByUsername(username, callback) {
	var query = {username: username};
	return models.User.findOne({where: query})
	.then(function(user) {
		console.log('Found user by username: ',user);
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
		res.redirect('/user/login');
	}
});

//Show user's farmers
router.get('/farmers', function(req, res) {
	if(req.isAuthenticated()) {
		res.render('farmers', { title: 'Farmers' });
	} else {
		req.flash('error_msg', 'You are not logged in.');
		res.redirect('/user/login');
	}
});

//Show user account settings
router.get('/account', function(req, res) {
	if(req.isAuthenticated()) {
		res.render('account', { title: 'Account Settings' });
	} else {
		req.flash('error_msg', 'You are not logged in.');
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
		res.render('signup', { errors: errors });
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
				console.log('New user created: ' + newUser.username);

				req.flash('success_msg', 'You are registered and can now login');
				res.redirect('/user/login');
			});
		});

	}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
  	getUserByUsername(username, function(err, user) {
	   	if(err) throw err;
	   	if(!user) {
	   		return done(null, false, {message: 'The user account doesn\'t exist! Please sign up first.'});
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
  passport.authenticate('local', {successRedirect:'/bundles/dashboard', failureRedirect:'/user/login', failureFlash: true}),
  function(req, res) {
    res.redirect('/bundles/dashboard');
});

module.exports = router;