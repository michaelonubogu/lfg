/**
 * Created by Namdascious on 6/3/2015.
 */
(function(){
    document.onreadystatechange = function(){
        var state = document.readyState;

		if (state === 'complete') {
			
			//Config & Util Settings
            var lfg = window.lfg !== null && window.lfg !== undefined ? window.lfg : {};
            var config = {
                appUrl: '',
                apiEndPoints: {
                    games: 'api/giantbomb/games',
                    game: 'api/giantbomb/game',
					platforms: 'api/giantbomb/platform',
					search: 'api/giantbomb/search',
					steamlogin: 'api/steam/authenticate'
                },
				firebaseUrl: 'https://lfgbase.firebaseio.com/',
                firebaseEntities: {
                    requests: 'requests',
                    games: 'games',
                    users: 'users'
                },

				getFirebaseUrl: function () {
					return this.firebaseUrl;
				},

				getGiantBombUrl: function (entity) {
					switch (entity) {
                        case this.apiEndPoints.games:
                            return this.appUrl + this.apiEndPoints.games;
                            break;

                        case this.apiEndPoints.game:
                            return this.appUrl + this.apiEndPoints.game;
                            break;

                        case this.apiEndPoints.platforms:
							return this.appUrl + this.apiEndPoints.platforms;
							break;

						case this.apiEndPoints.search:
							return this.appUrl + this.apiEndPoints.search;
							break;
                    }
				},

				getSteamVerifyUrl: function () {
					return this.appUrl + this.apiEndPoints.steamlogin;
				}
			};
			
			var utils = {
				/*This is used for lexicographical ordering of a date for firebase. Since javascript stores dates as numbers,
				 * and firebase doesn't order in  chronologic descending order, if I wanted to order any field in 
				 * chronologic descending order, I would need to make it so that the higher the time value, the smaller the 
				 * chronologic order. Since time is ever increasing, If I swap the highest possible digit in a time value (9) for the
				 * lowest possible letter in the alphabet (a), I could then create this ordering
				 * 
				 * I could probably do this without the array just using ascii code conversions, but at this time, this was just easier
				 * */
				indexMapping: [
					{ char: '0', value : 'j' },
					{ char: '1', value : 'i' },
					{ char: '2', value : 'h' },
					{ char: '3', value : 'g' },
					{ char: '4', value : 'f' },
					{ char: '5', value : 'e' },
					{ char: '6', value : 'd' },
					{ char: '7', value : 'c' },
					{ char: '8', value : 'b' },
					{ char: '9', value : 'a' },
				],
				
				checkEmail: function (email) {
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					
					if (!filter.test(email.value)) {
						return false;
					}
					return true;
				},
				
				convertDateToUtc: function (date) {
					return Date.UTC(
						date.getFullYear(),
						date.getMonth(),
						date.getDate(),
						date.getHours(),
						date.getMinutes(),
						date.getSeconds()
					);
				},
				
				convertUtcToLocal: function (utcDate) {
					var date = new Date(utcDate);
					date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
					return date.toString('MMM dd, yyyy h:mm tt');
				},
				
				clearWhiteSpace: function (str) {
					var re = / /g;
					return str.toString().replace(re, '');
				},
				
				getSearchIndex: function (string) {
					var ascii = '';
					var index = '';
					string = this.clearWhiteSpace(string);
					
					for (var i = 0; i < string.length; i++) {
						ascii += string.charCodeAt(i).toString();
					}
					
					for (var j = 0; j < ascii.length; j++) {
						index += this.getIndexSwap(ascii[j]);
					}
					
					return index;
				},
				
				getIndexSwap: function (char) {
					for (var i = 0; i < this.indexMapping.length; i++) {
						if (this.indexMapping[i].char === char) {
							return this.indexMapping[i].value;
						}
					}
				}

			}

			lfg.config = config;
			lfg.utils = utils;
            window.lfg = lfg;
        }
    }
})();