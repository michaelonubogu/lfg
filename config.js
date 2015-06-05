/**
 * Created by Namdascious on 6/4/2015.
 */
module.exports = {
    "giant_bomb": {
        "url" : "http://www.giantbomb.com/api/",
            "key" : "9caedc058d2f9553e2de63e66dde3d81df03d6d0",
            "endpoints" : {
            "game" : "game",
                "games" : "games",
                "genre" : "genre",
                "genres" : "genres",
                "platform" : "platform",
                "platforms" : "platforms",
                "search" : "search"
        },
        "formats":{
            "json" : "json",
                "xml" : "xml"
        },
        "sample_url" : "http://www.giantbomb.com/api/game/3030-4725/?api_key=[YOUR-KEY]",
        "sample_url_json" : "http://www.giantbomb.com/api/game/3030-4725/?api_key=[YOUR-KEY]&format=json&field_list=genres,name",
        "sample_url_breakdown" : "http://www.giantbomb.com/api/[RESOURCE-TYPE]/[RESOURCE-ID]/?api_key=[YOUR-KEY]&format=[RESPONSE-DATA-FORMAT]&field_list=[COMMA-SEPARATED-LIST-OF-RESOURCE-FIELDS]"
    }
}