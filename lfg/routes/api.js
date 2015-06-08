var express = require('express');
var giantbomb = require('../giantbomb');

var router = express.Router();

router.get('/', function (req, res) {
	res.send('respond with a resource');
});

router.get('/search', function (req, res) {
	giantbomb.getGames(req.query.search)
	.then(function (data) {
		res.send(data);
	}, function (err) {
		console.error("%s; %s", err.message, url);
		console.log("%j", err.res.statusCode);
	});
});

router.get('/games', function (req, res) {
//...
});

router.get('/game/:id', function (req, res) {
//...
});

router.get('/platforms', function (req, res) {
//...
});

router.get('/search', function (req, res) {
	console.log('FIRED!!!');
});

module.exports = router;