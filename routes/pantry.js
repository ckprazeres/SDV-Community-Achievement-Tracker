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
	room: 'pantry',
	title: 'Pantry',
	bundle: '',
	isBundlePage: true,
	isPantryPage: true,
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
		{id: 'springcrops', name: 'Spring Crops Bundle'},
		{id: 'summercrops', name: 'Summer Crops Bundle'},
		{id: 'fallcrops', name: 'Fall Crops Bundle'},
		{id: 'qualitycrops', name: 'Quality Crops Bundle'},
		{id: 'animal', name: 'Animal Bundle'},
		{id: 'artisan', name: 'Artisan Bundle'}
	];
	res.render('bundle', pageInfo);
});

router.get('/springcrops', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Spring Crops Bundle';
	pageInfo.bundle = 'springcrops';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'springcrops_parsnip', name: 'Parsnip'},
		{id: 'springcrops_greenbean', name: 'Green Bean'},
		{id: 'springcrops_cauliflower', name: 'Cauliflower'},
		{id: 'springcrops_potato', name: 'Potato'}
	];
	res.render('bundle', pageInfo);
});

router.get('/summercrops', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Summer Crops Bundle';
	pageInfo.bundle = 'summercrops';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'summercrops_tomato', name: 'Tomato'},
		{id: 'summercrops_hotpepper', name: 'Hot Pepper'},
		{id: 'summercrops_blueberry', name: 'Blueberry'},
		{id: 'summercrops_melon', name: 'Melon'}
	];
	res.render('bundle', pageInfo);
});

router.get('/fallcrops', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Fall Crops Bundle';
	pageInfo.bundle = 'fallcrops';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'fallcrops_corn', name: 'Corn'},
		{id: 'fallcrops_eggplant', name: 'Eggplant'},
		{id: 'fallcrops_pumpkin', name: 'Pumpkin'},
		{id: 'fallcrops_yam', name: 'Yam'}
	];
	res.render('bundle', pageInfo);
});

router.get('/qualitycrops', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Quality Crops Bundle';
	pageInfo.bundle = 'qualitycrops';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'qualitycrops_parsnip', name: 'Parsnip (5)'},
		{id: 'qualitycrops_melon', name: 'Melon (5)'},
		{id: 'qualitycrops_pumpkin', name: 'Pumpkin (5)'},
		{id: 'qualitycrops_corn', name: 'Corn (5)'}
	];
	res.render('bundle', pageInfo);
});

router.get('/animal', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Animal Bundle';
	pageInfo.bundle = 'animal';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'animal_milk', name: 'Milk'},
		{id: 'animal_egg_brown', name: 'Egg'},
		{id: 'animal_egg_white', name: 'Egg'},
		{id: 'animal_goatmilk', name: 'Goat Milk'},
		{id: 'animal_wool', name: 'Wool'},
		{id: 'animal_duckegg', name: 'Duck Egg'}
	];
	res.render('bundle', pageInfo);
});

router.get('/artisan', isAuthenticated, function(req, res){
	pageInfo.subtitle = 'Artisan Bundle';
	pageInfo.bundle = 'artisan';
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'artisan_truffleoil', name: 'Truffle Oil'},
		{id: 'artisan_cloth', name: 'Cloth'},
		{id: 'artisan_goatcheese', name: 'Goat Cheese'},
		{id: 'artisan_cheese', name: 'Cheese'},
		{id: 'artisan_honey', name: 'Honey'},
		{id: 'artisan_jelly', name: 'Jelly'},
		{id: 'artisan_apple', name: 'Apple'},
		{id: 'artisan_apricot', name: 'Apricot'},
		{id: 'artisan_orange', name: 'Orange'},
		{id: 'artisan_peach', name: 'Peach'},
		{id: 'artisan_pomegranate', name: 'Pomegranate'},
		{id: 'artisan_cherry', name: 'Cherry'}
	];
	res.render('bundle', pageInfo);
});

module.exports = router;