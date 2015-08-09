'use strict';

/**
 * @ngdoc function
 * @name goTouchApp.directive:header
 * @description
 * # header
 * Directive of the goTouchApp
 */
ngModule.directive('header', function () {
  return {
    restrict: 'EA',
    scope: {
      predicate:'=',
      reverse:'='
    },
    templateUrl: './modules/_appModule/directives/header/headerDirectiveTemplate.html',
    link: function (scope, elem, attrs){
      scope.orderBy = function (pre){
        scope.predicate = pre;
        scope.reverse = (pre == 'popularity')?true:false;
      }
    }
  }
});



