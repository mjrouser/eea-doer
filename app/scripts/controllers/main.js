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

     $scope.clearFilters = function(){
         $scope.searchIncentives = '';       
     };


     Tabletop.then(function(ttdata){
            
          var data = ttdata[0];
          $scope.tableData = data;
          //console.log(data);

      }); //End Tabletop

  }); //End Ctrl
