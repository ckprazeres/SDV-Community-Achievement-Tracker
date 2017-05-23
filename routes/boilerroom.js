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
	room: 'boilerroom',
	title: 'Boiler Room',
	bundle: '',
	isBundlePage: true,
	isBoilerroomPage: true,
	isIndex: false
}

// --------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------

router.get('/', isAuthenticated, function(req, res){
	pageInfo.subtitle = null;
	pageInfo.bundle = null;
	pageInfo.isIndex = true;
	pageInfo.bundles = [
		{id: 'blacksmiths', name: 'Blacksmith\'s Bundle'},
		{id: 'geologists', name: 'Geologist\'s Bundle'},
		{id: 'adventurers', name: 'Adventurer\'s Bundle'}
	];
	res.render('bundle', pageInfo);
});

router.get('/blacksmiths', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Blacksmith\'s Bundle';
	pageInfo.bundle = 'blacksmiths';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'blacksmiths_copperbar', name: 'Copper Bar'},
		{id: 'blacksmiths_ironbar', name: 'Iron Bar'},
		{id: 'blacksmiths_goldbar', name: 'Gold Bar'}
	];
	res.render('bundle', pageInfo);
});

router.get('/geologists', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Geologist\'s Bundle';
	pageInfo.bundle = 'geologists';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'geologists_quartz', name: 'Quartz'},
		{id: 'geologists_earthcrystal', name: 'Earth Crystal'},
		{id: 'geologists_frozentear', name: 'Frozen Tear'},
		{id: 'geologists_firequartz', name: 'Fire Quartz'}
	];
	res.render('bundle', pageInfo);
});

router.get('/adventurers', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Adventurer\'s Bundle';
	pageInfo.bundle = 'adventurers';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'adventurers_slime', name: 'Slime'},
		{id: 'adventurers_batwing', name: 'Bat Wing'},
		{id: 'adventurers_solaressence', name: 'Solar Essence'},
		{id: 'adventurers_voidessence', name: 'Void Essence'}
	];
	res.render('bundle', pageInfo);
});


module.exports = router;