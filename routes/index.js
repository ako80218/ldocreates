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
//simple redirect for incomplete URL
router.get('/cards', function(req, res, next) {
  res.redirect('/');
});

router.get('/cards/:card', function(req, res, next) {
	console.log("generalInfo.cardCategories", generalInfo.cardCategories)
	var result = generalInfo.cardCategories.find(function(element){
		return element === req.params.card;
	})
	if(result === req.params.card){
		res.render('cards', {title: generalInfo.siteTitle,
			heading:req.params.card
		});
	}else{
		res.redirect('/');
	}
});


module.exports = router;
