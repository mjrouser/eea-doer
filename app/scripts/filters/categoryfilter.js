'use strict';

/**
 * @ngdoc filter
 * @name eeaDoerApp.filter:categoryFilter
 * @function
 * @description
 * # categoryFilter
 * Filter in the eeaDoerApp.
 */
angular.module('eeaDoerApp')
  .filter('categoryFilter', function () {
    return function (items, categories) {

      var filtered = [];

      angular.forEach(items, function(item){
    	  if (categories.appliances === false && categories.construction === false) {
    		filtered.push(item);
    	  }else if(categories.appliances === true && categories.construction === false && item.category === 'appliances'){
    		filtered.push(item);
         }else if(categories.construction === true && categories.appliances === false && item.category === 'construction'){
    		filtered.push(item);
    	  }

      });


      return filtered;
  });