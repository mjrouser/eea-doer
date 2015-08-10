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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  .config(function(TabletopProvider){
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/1HkW89u4SJYZyEcaA0f50UoTqQn-hhPI14RgPox-Atn8/pubhtml',
      simpleSheet: true
    });
  })
