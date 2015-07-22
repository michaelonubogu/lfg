var express = require('express');
var giantbomb = require('../giantbomb');
var config = require('../config');
var openid = require('openid');

var app = express();
var router = express.Router();
var host = process.env.HOST;
var port = process.env.PORT || 1337;

var origin = 'http://' + host + ':' + port;

var relyingParty = new openid.RelyingParty(
							origin + '/steam/authenticate/verify', // Verification URL (yours)
							origin, // Realm (optional, specifies realm for OpenID authentication)
							true, // Use stateless verification
							false, // Strict mode
							[]
); // List of extensions to enable and include


router.get('/', function (req, res) {
	res.send('respond with a resource');
});

router.get('/steam/authenticate', function (req, res) {
	
	var identifier = config.steam.provider;

	relyingParty.authenticate(identifier, false, function (error, authUrl) {
		if (error) {
			res.writeHead(200);
			res.end('Authentication failed: ' + error.message);
		}
		else if (!authUrl) {
			res.writeHead(200);
			res.end('Authentication failed');
		}
		else {
			res.status(200).send({ 'url' : authUrl });
		}
	});
});

router.get('/steam/authenticate/verify', function (req, res) {
	relyingParty.verifyAssertion(req, function (error, result) {
		res.writeHead(200);
		res.end(!error && result.authenticated 
                  ? 'Success :)'
                  : 'Failure :(');
	});
});

router.get('/giantbomb/search', function (req, res) {
	giantbomb.getGames(req.query.search, req.query.limit)
	.then(function (data) {
		res.send(data);
	}, function (err) {
		console.error("%s; %s", err.message, url);
		console.log("%j", err.res.statusCode);
	});
});

router.get('/giantbomb/games', function (req, res) {
//...
});

router.get('/giantbomb/game/:id', function (req, res) {
//...
});

router.get('/giantbomb/platforms', function (req, res) {
//...
});

module.exports = router;