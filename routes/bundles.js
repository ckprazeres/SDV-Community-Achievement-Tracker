var express = require('express');
var router = express.Router();
var models = require('../models');

// Get Homepage
router.get('/', function(req, res){
	res.redirect('/bundles/dashboard');
});

router.get('/dashboard', function(req, res){
	if(req.isAuthenticated()){
		res.render('dashboard', { title: 'Dashboard', isBundlePage: true });
	} else {
		res.redirect('/user/login');
	}
});

function ensureAuthenticated(req, res, next){

}

router.get('/boilerroom', function(req, res){
	res.render('boilerroom', { title: 'Boiler Room', isBundlePage: true });
});

router.get('/bulletinboard', function(req, res){
	res.render('bulletinboard', { title: 'Bulletin Board', isBundlePage: true });
});

router.get('/craftsroom', function(req, res){
	res.render('craftsroom', { title: 'Crafts Room', isBundlePage: true });
});

router.get('/fishtank', function(req, res){
	res.render('fishtank', { title: 'Fish Tank', isBundlePage: true });
});

router.get('/pantry', function(req, res){
	res.render('pantry', { title: 'Pantry', isBundlePage: true });
});

router.get('/vault', function(req, res){
	res.render('vault', { title: 'Vault', isBundlePage: true });
});

module.exports = router;