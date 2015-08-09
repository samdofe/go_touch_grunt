'use strict';

/**
 * @ngdoc function
 * @name goTouchApp.directive:header
 * @description
 * # header
 * Directive of the goTouchApp
 */
ngModule.directive('actorShrinkInfo', function () {
  return {
    restrict: 'EA',
    scope:{
      actor : '=',
      index : '@?'
    },
    templateUrl: './modules/actorsModule/directives/actorShrinkInfo/actorShrinkInfoDirectiveTemplate.html',
    link : function (scope, elem, attrs){
      if(scope.index) console.log("está en la posición : "+ scope.index);
    }
    /*controllerAs: 'act',
    controller: function () {
      var act = this;

      console.log("está en la posición : "+ index);

    }*/
  }
});



