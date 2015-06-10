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
            lfg.config = config;
            window.lfg = lfg;
        }
    }
})();