var express = require('express');
var router = express.Router();
var generalInfo = require('../models/generalInfo.js');
var utilities = require("../functions/utilities.js");


// router.get('/*', function (req, res, next) {


//   // if (req.url.indexOf("/images/") === 0 || req.url.indexOf("/stylesheets/") === 0 || req.url.indexOf("/javascripts/") === 0) {
//   //   res.setHeader("Cache-Control", "public, max-age=2592000");
//   //   res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
//   // }
//   next();
// });


/* GET home page. */
router.get('/', function(req, res, next) {
	var images = utilities.assembleImages(generalInfo.images);

	// var categories = utilities.formatCategories(generalInfo.removableCharacters, generalInfo.cardCategories);
  res.render('index', { title: generalInfo.siteTitle,
  		email: generalInfo.ldoContactEmail
  		// cards: cards
  	});
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
	// var heading = utilities.format(generalInfo.removableCharacters ,req.params.card);
	var isCategory = generalInfo.cardCategories.find(function(element){
		return element === req.params.card;
	})
	if(isCategory){
		var images = utilities.assembleImages(generalInfo.images , "category", req.params.card),
		heading = utilities.format(generalInfo.removableCharacters, req.params.card);
		res.render('cards', {title: generalInfo.siteTitle,
			heading:heading,
			images:images,
		});
	}else{
		res.redirect('/');
	}
});


module.exports = router;
