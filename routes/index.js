var express = require('express');
var router = express.Router();
var generalInfo = require('../models/generalInfo.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: generalInfo.siteTitle,
  		email: generalInfo.ldoContactEmail });
});
router.get('/about', function(req, res, next) {
  res.render('about', {title: generalInfo.siteTitle,
  	email: generalInfo.ldoContactEmail});
});

module.exports = router;
