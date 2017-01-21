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
	room: 'craftsroom',
	title: 'Crafts Room',
	bundle: '',
	isBundlePage: true,
	isCraftsroomPage: true,
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
		{id: 'springforaging', name: 'Spring Foraging Bundle'},
		{id: 'summerforaging', name: 'Summer Foraging Bundle'},
		{id: 'fallforaging', name: 'Fall Foraging Bundle'},
		{id: 'winterforaging', name: 'Winter Foraging Bundle'},
		{id: 'construction', name: 'Construction Bundle'},
		{id: 'exoticforaging', name: 'Exotic Forging Bundle'}
	];
	res.render('bundle', pageInfo);
});

router.get('/springforaging', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Spring Foraging Bundle';
	pageInfo.bundle = 'springforaging';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'springforaging_wildhorseradish', name: 'Wild Horseradish'},
		{id: 'springforaging_daffodil', name: 'Daffodil'},
		{id: 'springforaging_leek', name: 'Leek'},
		{id: 'springforaging_dandelion', name: 'Dandelion'}
	];
	res.render('bundle', pageInfo);
});

router.get('/summerforaging', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Summer Foraging Bundle';
	pageInfo.bundle = 'summerforaging';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'summerforaging_grape', name: 'Grape'},
		{id: 'summerforaging_spiceberry', name: 'Spice Berry'},
		{id: 'summerforaging_sweetpea', name: 'Sweet Pea'}
	];
	res.render('bundle', pageInfo);
});

router.get('/fallforaging', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Fall Foraging Bundle';
	pageInfo.bundle = 'fallforaging';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'fallforaging_commonmushroom', name: 'Common Mushroom'},
		{id: 'fallforaging_wildplum', name: 'Wild Plum'},
		{id: 'fallforaging_hazelnut', name: 'Hazelnut'},
		{id: 'fallforaging_blackberry', name: 'Blackberry'}
	];
	res.render('bundle', pageInfo);
});

router.get('/winterforaging', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Winter Foraging Bundle';
	pageInfo.bundle = 'winterforaging';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'winterforaging_winterroot', name: 'Winter Root'},
		{id: 'winterforaging_crystalfruit', name: 'Crystal Fruit'},
		{id: 'winterforaging_snowyam', name: 'Snow Yam'},
		{id: 'winterforaging_crocus', name: 'Crocus'}
	];
	res.render('bundle', pageInfo);
});

router.get('/construction', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Construction Bundle';
	pageInfo.bundle = 'construction';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'construction_wood', name: 'Wood (99)'},
		{id: 'construction_wood2', name: 'Wood (99)'},
		{id: 'construction_stone', name: 'Stone (99)'},
		{id: 'construction_hardwood', name: 'Hardwood (10)'}
	];
	res.render('bundle', pageInfo);
});

router.get('/exoticforaging', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Exotic Foraging Bundle';
	pageInfo.bundle = 'exoticforaging';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'exoticforaging_coconut', name: 'Coconut'},
		{id: 'exoticforaging_cactusfruit', name: 'Cactus Fruit'},
		{id: 'exoticforaging_cavecarrot', name: 'Cave Carrot'},
		{id: 'exoticforaging_redmushroom', name: 'Red Mushroom'},
		{id: 'exoticforaging_purplemushroom', name: 'Purple Mushroom'},
		{id: 'exoticforaging_maplesyrup', name: 'Maple Syrup'},
		{id: 'exoticforaging_oakresin', name: 'Oak Resin'},
		{id: 'exoticforaging_pinetar', name: 'Pine Tar'},
		{id: 'exoticforaging_morel', name: 'Morel'}
	];
	res.render('bundle', pageInfo);
});

module.exports = router;