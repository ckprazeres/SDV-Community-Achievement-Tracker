var express = require('express');
var router = express.Router();
var models = require('../models');

// --------------------------------------------------------------------
// Functions & Variables
// --------------------------------------------------------------------
function isAuthenticated(req, res, callback){
	if(req.isAuthenticated()){
		return callback();
	} else {
		res.redirect('/user/login');
	}
}

var pageInfo = {
	title: 'Boiler Room',
	isBundlePage: true,
	isBoilerroomPage: true
}

// --------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------

router.get('/', isAuthenticated, function(req, res){
	pageInfo.subtitle = null;
	res.render('boilerroom', pageInfo);
});

router.get('/blacksmiths', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Blacksmith\'s Bundle';
	res.render('boilerroom', pageInfo);
});

router.get('/geologists', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Geologist\'s Bundle';
	res.render('boilerroom', pageInfo);
});

router.get('/adventurers', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Adventurer\'s Bundle';
	res.render('boilerroom', pageInfo);
});


module.exports = router;