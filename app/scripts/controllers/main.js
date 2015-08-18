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


     $scope.sortType     = 'programName'; // set the default sort type
     $scope.sortReverse  = false;  // set the default sort order
     $scope.searchIncentives   = '';     // set the default search/filter term
     $scope.types = {efficiency: false, renewables: false};
     $scope.categories = {appliances: false, construction: false, electricity: false, retrofit: false, loans: false};
     $scope.search = [];


     Tabletop.then(function(ttdata){
            
          var data = ttdata[0];
          $scope.tableData = data;
          //var titleObj = data[0];
          //$scope.tableTitles = Object.keys(titleObj);
          //console.log($scope.tableTitles);
          console.log(data);

      }); //End Tabletop

  }); //End Ctrl
