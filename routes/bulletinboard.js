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
	room: 'bulletinboard',
	title: 'Bulletin Board',
	bundle: '',
	isBundlePage: true,
	isBulletinboardPage: true,
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
		{id: 'chefs', name: 'Chef\'s Bundle'},
		{id: 'dye', name: 'Dye Bundle'},
		{id: 'fieldresearch', name: 'Field Research Bundle'},
		{id: 'fodder', name: 'Fodder Bundle'},
		{id: 'enchanters', name: 'Enchanter\'s Bundle'}
	];
	res.render('bundle', pageInfo);
});

router.get('/chefs', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Chef\'s Bundle';
	pageInfo.bundle = 'chefs';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'chefs_maplesyrup', name: 'Maple Syrup'},
		{id: 'chefs_fiddleheadfern', name: 'Fiddlehead Fern'},
		{id: 'chefs_truffle', name: 'Truffle'},
		{id: 'chefs_poppy', name: 'Poppy'},
		{id: 'chefs_makiroll', name: 'Maki Roll'},
		{id: 'chefs_friedegg', name: 'Fried Egg'}
	];
	res.render('bundle', pageInfo);
});

router.get('/dye', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Dye Bundle';
	pageInfo.bundle = 'dye';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'dye_redmushroom', name: 'Red Mushroom'},
		{id: 'dye_seaurchin', name: 'Sea Urchin'},
		{id: 'dye_sunflower', name: 'Sunflower'},
		{id: 'dye_duckfeather', name: 'Duck Feather'},
		{id: 'dye_aquamarine', name: 'Aquamarine'},
		{id: 'dye_redcabbage', name: 'Red Cabbage'}
	];
	res.render('bundle', pageInfo);
});

router.get('/fieldresearch', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Field Research Bundle';
	pageInfo.bundle = 'fieldresearch';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'fieldresearch_purplemushroom', name: 'Purple Mushroom'},
		{id: 'fieldresearch_nautilusshell', name: 'Nautilus Shell'},
		{id: 'fieldresearch_chub', name: 'Chub'},
		{id: 'fieldresearch_frozengeode', name: 'Frozen Geode'}
	];
	res.render('bundle', pageInfo);
});

router.get('/fodder', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Fodder Bundle';
	pageInfo.bundle = 'fodder';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'fodder_wheat', name: 'Wheat (10)'},
		{id: 'fodder_hay', name: 'Hay (10)'},
		{id: 'fodder_apple', name: 'Apple (3)'}
	];
	res.render('bundle', pageInfo);
});

router.get('/enchanters', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Enchanter\'s Bundle';
	pageInfo.bundle = 'enchanters';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'enchanters_oakresin', name: 'Oak Resin'},
		{id: 'enchanters_wine', name: 'Wine'},
		{id: 'enchanters_rabbitsfoot', name: 'Rabbit\'s Foot'},
		{id: 'enchanters_pomegranate', name: 'Pomegranate'}
	];
	res.render('bundle', pageInfo);
});

module.exports = router;