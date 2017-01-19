var express = require('express');
var router = express.Router();
var models = require('../models');

// --------------------------------------------------------------------
// Functions
// --------------------------------------------------------------------
function isAuthenticated(req, res, callback){
	if(req.isAuthenticated()){
		return callback();
	} else {
		res.redirect('/user/login');
	}
}

// --------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------

// Get Homepage
router.get('/', function(req, res){
	res.redirect('/bundles/dashboard');
});

router.get('/dashboard', isAuthenticated, function(req, res){
		res.render('dashboard', { title: 'Dashboard', isBundlePage: true });
});

router.get('/bulletinboard', isAuthenticated, function(req, res){
	res.render('bulletinboard', { title: 'Bulletin Board', isBundlePage: true });
});

router.get('/craftsroom', isAuthenticated, function(req, res){
	res.render('craftsroom', { title: 'Crafts Room', isBundlePage: true });
});

router.get('/fishtank', isAuthenticated, function(req, res){
	res.render('fishtank', { title: 'Fish Tank', isBundlePage: true });
});

router.get('/pantry', isAuthenticated, function(req, res){
	res.render('pantry', { title: 'Pantry', isBundlePage: true });
});

router.get('/vault', isAuthenticated, function(req, res){
	res.render('vault', { title: 'Vault', isBundlePage: true });
});

module.exports = router;