/**
 * Created by Namdascious on 6/3/2015.
 */
(function(){
    document.onreadystatechange = function(){
        var state = document.readyState;

        if(state === 'complete'){
            var lfg = window.lfg !== null && window.lfg !== undefined ? window.lfg : {};
            var config = {
                appUrl: '',
                apiEndPoints: {
                    games: 'api/giantbomb/games',
                    game: 'api/giantbomb/game',
					platforms: 'api/giantbomb/platform',
					search: 'api/giantbomb/search'
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
				}
			};
			
			var utils = {
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
				
				convertDateToUtc: function (date) {
					return Date.UTC(
						date.getFullYear(),
						date.getMonth(),
						date.getHours(),
						date.getMinutes(),
						date.getSeconds(),
						date.getMilliseconds()
					)
				},
				
				convertUtcToLocal: function (utcDate) {
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