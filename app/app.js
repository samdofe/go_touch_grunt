'use strict';

/**
 * @ngdoc overview
 * @name goTouchApp
 * @description
 * # goTouchApp
 *
 * Main module of the application.
 */
var ngModule = angular
  .module('goTouchApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize'
  ]);
  ngModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('goTouchApp', {
        url: '/goTouchApp', // Make to navigate to index.html#/
        abstract : true,
        template: '<ui-view/>'
      })
      .state('goTouchApp.actorsList', {
        url: '/actorsList', // Make to navigate to index.html#/
        templateUrl: 'modules/statesModule/actorsList/actorsListTemplate.html',
        controller: 'ActorsListCtrl as actList'
      })
      .state('goTouchApp.actorsDetailInfo', {
        url: '/actorsDetailInfo/:id', // Make to navigate to index.html#/
        templateUrl: 'modules/statesModule/actorDetailInfo/actorsDetailInfoTemplate.html',
        controller: 'ActorsDetailInfoCtrl as actDetail'
      });

    $urlRouterProvider.otherwise('goTouchApp/actorsList');
  }]);

ngModule.run(['$templateCache', function ($templateCache){

}]);
