/**
 * Created by Namdascious on 6/4/2015.
 */
var rp = require('request-promise');
var config = require('./config.js');

var giantbomb = {

    getGames: function(query){
		var gbRef = config.giant_bomb;
		var url = gbRef.url + gbRef.endpoints.search + '/?api_key=' + gbRef.key + '&limit=10&format=json&query="' + query + '"&resources=game';
		return rp(url);
    },

    getGame: function(){

    },

    getGenres: function(){

    },

    getGenre: function(){

    },

    getPlatforms: function(){

    },

    getPlatform: function(){

    }
};

module.exports = giantbomb;
