var express = require('express');
var burger = require('../models/blog.js');
var router = express.Router();

router.get("/", function (req, res) {
    
});


router.post('/burger', function (req, res) {
    burger.postAblog(["burger_name"], req.body.burger_name, function(result) {
      res.redirect('/index.js');
    });
  });