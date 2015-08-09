ngModule.service('actorsService', [ '$http', function ($http){

        var serviceModel = this,
            URLS = {
                FETCH : '/resources/sampleActors.json'
            },
            actorsList;

        function extract (result){
            return result.data;
        };

        function cacheActors (result){
            actorsList = extract(result);
            return actorsList
        }

        serviceModel.loadActorsList = function (){
            return $http.get(URLS.FETCH).then(cacheActors);

        };

    }]);
