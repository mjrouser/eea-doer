'use strict';

/**
 * @ngdoc function
 * @name eeaDoerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eeaDoerApp
 */
angular.module('eeaDoerApp')
  .controller('MainCtrl', function ($scope, Tabletop) {


     Tabletop.then(function(ttdata){
      
      
      var data = ttdata[0];
      $scope.tableData = data;
      var titleObj = data[0];
      $scope.tableTitles = Object.keys(titleObj);
      console.log($scope.tableTitles);
      console.log(data);

      }); //End Tabletop

  }); //End Ctrl
