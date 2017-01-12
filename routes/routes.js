var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index', { header: 'Welcome' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		res.redirect('/bundles/dashboard');
	} else {
		return next();
	}
}

module.exports = router;