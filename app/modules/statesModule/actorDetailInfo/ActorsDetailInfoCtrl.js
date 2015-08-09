ngModule.controller('ActorsDetailInfoCtrl', ['$state', '$stateParams', 'actorsService', function($state, $stateParams, actorsService){
        var actDetail = this;

        var getActor = function (actors){
          actDetail.actor = undefined;
          angular.forEach(actors, function (actor, key){
            if(actor.id == $stateParams.id){
              return actDetail.actor = actor;
            }
          })

          if(!actDetail.actor){
            console.error("No se ha encontrado el actor solicitado");
          }
        }

        actorsService.loadActorsList().then(function(result){
          console.log('result', result);
          getActor(result.actors);
        });
    }]);
