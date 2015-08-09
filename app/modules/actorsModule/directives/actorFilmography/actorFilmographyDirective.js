'use strict';

/**
 * @ngdoc function
 * @name goTouchApp.directive:actorFilmography
 * @description
 * # actorFilmography
 * Directive of the goTouchApp
 */
ngModule.directive('actorFilmography', function () {
  return {
    restrict: 'EA',
    scope:{
      filmo : '='
    },
    templateUrl: './modules/actorsModule/directives/actorFilmography/actorFilmographyDirectiveTemplate.html',
    link : function (scope, elem, attrs){
    }
  }
});



