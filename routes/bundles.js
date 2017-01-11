var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.redirect('/bundles/dashboard');
});

router.get('/dashboard', ensureAuthenticated, function(req, res){
	res.render('dashboard', { title: 'Dashboard', isBundlePage: true });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/user/login');
	}
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