'use strict';

/**
 * @ngdoc overview
 * @name ngselectCustomizeApp
 * @description
 * # ngselectCustomizeApp
 *
 * Main module of the application.
 */
angular
  .module('ngselectCustomizeApp', [
    'ui.select2'
  ])
  .run(['$rootScope', function($rootScope){
    $rootScope.items = [
        {name: 'Paid', value: 1, color:'green', checked: false},
        {name: 'Guest', value: 2, color:'blue', checked: false},
        {name: 'Hot List', value: 3, color: 'yellow', checked: false},
        {name: 'Unpaid', value: 4, color: 'red', checked: false}
    ];
  }]);
