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
        };

        /*This should be a REST service call*/
        serviceModel.loadActorsList = function (queryParams){
          if(!queryParams){
            return $http.get(URLS.FETCH).then(cacheActors);
          }else{
            /*TODO
            *  Call to a REST service to get back the filter actors list
            *  and send it back to the ActorListCtrl
            * */
          }


        };

        serviceModel.loadFilterActorsList = function (queryParams){
          /*TODO
           * method: loadFilterActorsList
           * - Tell the ActorListCtrl that has to load the actors again with the queryParams
           * - Tell the actor list to load again
           * */
        }



    }]);
