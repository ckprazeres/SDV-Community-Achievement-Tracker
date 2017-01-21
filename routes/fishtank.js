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
	room: 'fishtank',
	title: 'Fish Tank',
	bundle: '',
	isBundlePage: true,
	isFishtankPage: true,
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
		{id: 'riverfish', name: 'River Fish Bundle'},
		{id: 'lakefish', name: 'Lake Fish Bundle'},
		{id: 'oceanfish', name: 'Ocean Fish Bundle'},
		{id: 'nightfishing', name: 'Night Fishing Bundle'},
		{id: 'crabpot', name: 'Crab Pot Bundle'},
		{id: 'specialtyfish', name: 'Specialty Fish Bundle'}
	];
	res.render('bundle', pageInfo);
});

router.get('/riverfish', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'River Fish Bundle';
	pageInfo.bundle = 'riverfish';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'riverfish_sunfish', name: 'Sunfish'},
		{id: 'riverfish_catfish', name: 'Catfish'},
		{id: 'riverfish_shad', name: 'Shad'},
		{id: 'riverfish_tigertrout', name: 'Tiger Trout'}
	];
	res.render('bundle', pageInfo);
});

router.get('/lakefish', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Lake Fish Bundle';
	pageInfo.bundle = 'lakefish';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'lakefish_largemouthbass', name: 'Large Mouth Bass'},
		{id: 'lakefish_carp', name: 'Carp'},
		{id: 'lakefish_bullhead', name: 'Bullhead'},
		{id: 'lakefish_sturgeon', name: 'Sturgeon'}
	];
	res.render('bundle', pageInfo);
});

router.get('/oceanfish', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Ocean Fish Bundle';
	pageInfo.bundle = 'oceanfish';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'oceanfish_sardine', name: 'Sardine'},
		{id: 'oceanfish_tuna', name: 'Tuna'},
		{id: 'oceanfish_redsnapper', name: 'Red Snapper'},
		{id: 'oceanfish_tilapia', name: 'Tilapia'}
	];
	res.render('bundle', pageInfo);
});

router.get('/nightfishing', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Night Fishing Bundle';
	pageInfo.bundle = 'nightfishing';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'nightfishing_walleye', name: 'Walleye'},
		{id: 'nightfishing_bream', name: 'Bream'},
		{id: 'nightfishing_eel', name: 'Eel'}
	];
	res.render('bundle', pageInfo);
});

router.get('/crabpot', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Crab Pot Bundle';
	pageInfo.bundle = 'crabpot';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'crabpot_lobster', name: 'Lobster'},
		{id: 'crabpot_crayfish', name: 'Crayfish'},
		{id: 'crabpot_crab', name: 'Crab'},
		{id: 'crabpot_cockle', name: 'Cockle'},
		{id: 'crabpot_mussel', name: 'Mussel'},
		{id: 'crabpot_shrimp', name: 'Shrimp'},
		{id: 'crabpot_snail', name: 'Snail'},
		{id: 'crabpot_periwinkle', name: 'Periwinkle'},
		{id: 'crabpot_oyster', name: 'Oyster'},
		{id: 'crabpot_clam', name: 'Clam'}
	];
	res.render('bundle', pageInfo);
});

router.get('/specialtyfish', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Specialty Fish Bundle';
	pageInfo.bundle = 'specialtyfish';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'specialtyfish_pufferfish', name: 'Pufferfish'},
		{id: 'specialtyfish_ghostfish', name: 'Ghostfish'},
		{id: 'specialtyfish_sandfish', name: 'Sandfish'},
		{id: 'specialtyfish_woodskip', name: 'Woodskip'}
	];
	res.render('bundle', pageInfo);
});

module.exports = router;