  var express = require('express');
  var Data = require('../models')["Data"];
  var router = express.Router();

  router.get('/', function (req, res) {

    res.redirect("landing");
  });


 router.get('/landing', function (req, res) {
    
    res.render("landing");
  });


  module.exports = router;