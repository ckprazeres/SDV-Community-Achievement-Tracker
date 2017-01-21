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
	room: 'vault',
	title: 'Vault',
	bundle: '',
	isBundlePage: true,
	isVaultPage: true,
	isIndex: false
}

// --------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------

router.get('/', isAuthenticated, function(req, res){
	pageInfo.subtitle = null;
	pageInfo.bundle = null;
	pageInfo.isIndex = false;
	pageInfo.bundleItems = [
		{id: 'vault_2500', name: '2,500'},
		{id: 'vault_5000', name: '5,000'},
		{id: 'vault_10000', name: '10,000'},
		{id: 'vault_25000', name: '25,000'}
	];
	res.render('bundle', pageInfo);
});

module.exports = router;