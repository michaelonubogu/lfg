/**
 * Created by Namdascious on 6/3/2015.
 */
(function(){
    document.onreadystatechange = function(){
        var state = document.readyState;

        if(state === 'complete'){
            var lfg = {};
            var config = {
                appUrl: 'http://localhost:3300/api/',
                apiEndPoints: {
                    games: 'games',
                    game: 'game',
                    platforms: 'platform'
                },
                firebaseUrl: 'https://lfgbase.firebaseio.com/',
                firebaseEntities: {
                    requests: 'requests',
                    games: 'games',
                    users: 'users'
                },

                getFirebaseUrl: function(entity){
                    switch(entity){
                        case this.firebaseEntities.requests:
                            return this.firebaseUrl + this.firebaseEntities.requests;
                            break;

                        case this.firebaseEntities.games:
                            return this.firebaseUrl + this.firebaseEntities.games;
                            break;

                        case this.firebaseEntities.users:
                            return this.firebaseUrl + this.firebaseEntities.users;
                            break;
                    }
                }
            };
            lfg.config = config;
            window.lfg = lfg;
        }
    }
})();