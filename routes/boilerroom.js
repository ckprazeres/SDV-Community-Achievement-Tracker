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
	isBoilerroomPage: true,
	isIndex: false,
	isBlacksmiths: false,
	isGeologists: false,
	isAdventurers: false
}

// --------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------

router.get('/', isAuthenticated, function(req, res){
	pageInfo.subtitle = null;
	pageInfo.isIndex = true;
	pageInfo.isBlacksmiths = false;
	pageInfo.isGeologists = false;
	pageInfo.isAdventurers = false;
	pageInfo.bundles = [
		{id: 'blacksmiths', name: 'Blacksmith\'s Bundle'},
		{id: 'geologists', name: 'Geologist\'s Bundle'},
		{id: 'adventurers', name: 'Adventurer\'s Bundle'}
	];
	res.render('boilerroom', pageInfo);
});

router.get('/blacksmiths', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Blacksmith\'s Bundle';
	pageInfo.isIndex = false;
	pageInfo.isBlacksmiths = true;
	pageInfo.isGeologists = false;
	pageInfo.isAdventurers = false;
	pageInfo.bundleItems = [
		{id: 'blacksmiths_copperbar', name: 'Copper Bar'},
		{id: 'blacksmiths_ironbar', name: 'Iron Bar'},
		{id: 'blacksmiths_goldbar', name: 'Gold Bar'},
	];
	res.render('boilerroom', pageInfo);
});

router.get('/geologists', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Geologist\'s Bundle';
	pageInfo.isIndex = false;
	pageInfo.isBlacksmiths = false;
	pageInfo.isGeologists = true;
	pageInfo.isAdventurers = false;
	pageInfo.bundleItems = [
		{id: 'geologists_quartz', name: 'Quartz'},
		{id: 'geologists_earthcrystal', name: 'Earth Crystal'},
		{id: 'geologists_frozentear', name: 'Frozen Tear'},
		{id: 'geologists_firequartz', name: 'Fire Quartz'}
	];
	res.render('boilerroom', pageInfo);
});

router.get('/adventurers', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Adventurer\'s Bundle';
	pageInfo.isIndex = false;
	pageInfo.isBlacksmiths = false;
	pageInfo.isGeologists = false;
	pageInfo.isAdventurers = true;
	pageInfo.bundleItems = [
		{id: 'adventurers_slime', name: 'Slime'},
		{id: 'adventurers_batwing', name: 'Bat Wing'},
		{id: 'adventurers_solaressence', name: 'Solar Essence'},
		{id: 'adventurers_voidessence', name: 'Void Essence'}
	];
	res.render('boilerroom', pageInfo);
});


module.exports = router;