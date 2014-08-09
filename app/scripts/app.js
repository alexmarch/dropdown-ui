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
    $rootScope.select2Status = {
      items:[
        {name: 'Paid', id: 1, color:'red', checked: false},
        {name: 'Guest', id: 2, color:'green', checked: false},
        {name: 'Hot List', id: 3, color: 'blue', checked: false}
      ]
    };
    var itemRenderResult = function(item){
      var currentItem = null;
      if(item.id){
        currentItem = $rootScope.select2Status.items[item.id-1];
      }
      return '<input type="checkbox" '+(currentItem && currentItem.checked ? 'checked="checked"' : '')+' />'+
      '<div class="circle '+currentItem.color+'"></div>' + item.text;
    };
    var itemRenderSelection = function(item){
      var selectedItem = null;
      if(item.id){
        selectedItem = $rootScope.select2Status.items[item.id-1];
        selectedItem.checked = true;
        //@todo: make checkbox unchecked
      };
      return '<input type="checkbox" checked="checked"/>' + item.text;
    }
    $rootScope.select2Options = {
      minimumResultsForSearch: '-1',
      'width': '250px',
      formatResult: itemRenderResult,
      formatSelection: itemRenderSelection,
    };
  }]);
