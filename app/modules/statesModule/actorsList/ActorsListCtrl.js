ngModule.controller('ActorsListCtrl', ['actorsService', function(actorsService){
    var actList = this;
    actList.predicate = 'name';
    actList.reverse = false;

   actorsService.loadActorsList().then(function(result){
       console.log('result', result);
       actList.actorsList = result;
       console.info(actList.actorsList);
   });

}]);
