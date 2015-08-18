'use strict';

/**
 * @ngdoc overview
 * @name eeaDoerApp
 * @description
 * # eeaDoerApp
 *
 * Main module of the application.
 */
angular
  .module('eeaDoerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'times.tabletop'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/glosary', {
        templateUrl: 'views/glosary.html',
        controller: 'GlosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(TabletopProvider){
    TabletopProvider.setTabletopOptions({
      key:'https://docs.google.com/spreadsheets/d/1lizvDw-cztrOAaYOPdemJEXik9oyO2t4IepGOjcDdzk/pubhtml',
      simpleSheet: true
    });
  });
