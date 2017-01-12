var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
	if(req.isAuthenticated()) {
		res.render('farmers', { title: 'Farmers' });
	} else {
		res.redirect('/user/login');
	}
});

module.exports = router;