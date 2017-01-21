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
	pageInfo = {
		title: 'Dashboard',
		isBundlePage: true,
		bundles: [
			{id: 'boilerroom', name: 'Boiler Room', picture: 'geologists'},
			{id: 'bulletinboard', name: 'Bulletin Board', picture: 'fodder'},
			{id: 'craftsroom', name: 'Crafts Room', picture: 'fallforaging'},
			{id: 'fishtank', name: 'Fish Tank', picture: 'nightfishing'},
			{id: 'pantry', name: 'Pantry', picture: 'artisan'},
			{id: 'vault', name: 'Vault', picture: '25000'}
		]
	};
	res.render('dashboard', pageInfo);
});

module.exports = router;