'use strict';

/**
 * @ngdoc directive
 * @name ngselectCustomizeApp.directive:dropdownUi
 * @description
 * # dropdownUi
 */
angular.module('ngselectCustomizeApp')
  .directive('dropdownUi', function () {
  	var postLink = function(scope, element, attrs) {

        var startTags = '<div class="dropdown">' +
        	'<a class="dropdown-toggle btn" data-toggle="dropdown" href="#" >' +
        		'<span id="selectedItems">All status</span><b class="arrow"></b>' +
        	'</a>' + '<ul class="dropdown-menu dropdown-menu-form" role="menu">';

    		var endTags = '</ul></div>';
    		var itemsTags = '';

    		if(scope.items){
    			angular.forEach(scope.items, function(val, key){
    				itemsTags += '<li><label class="checkbox">'+
                    '<input type="checkbox" data-index="'+key+'" id="checkbox_'+key+'" value="'+val.value+'"'+(val.checked ? 'checked="checked"' : '')+'><span class="ui-checkbox"></span><div class="circle '+val.color+'"></div>' +
    				 val.name+'</label></li>';
    			});

    			element.html(startTags+itemsTags+endTags);

    			element.find('input[type="checkbox"]').on('click',function(e){
    				var $checkbox = angular.element(e.currentTarget);
    				if($checkbox.is(':checked')){
    					scope.items[$checkbox.data('index')].checked = true;
    					scope.$apply();
    				}else{
    					scope.items[$checkbox.data('index')].checked = false;
    					scope.$apply();
    				}
    			});

    			scope.$watch('items',function(itemsChanged){
    				var selectedLabels = '';
    				var selectedCount = 0;
    				angular.forEach(itemsChanged, function(val, key){
    					if(val.checked){
    						selectedLabels += val.name + ' ';
    						selectedCount++;
    					}
    				});
    				if(selectedCount){
    					element.find('#selectedItems').text(selectedCount + ' selected');
    				}else{
    					element.find('#selectedItems').text("All status");
    				}

    			}, true);

    			element.find('.dropdown-menu').on('click', function(e) {
    				if(angular.element(this).hasClass('dropdown-menu-form')) {
    					e.stopPropagation();
    				}
					});
    		}
    };
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      scope: {
      	items: '=items'
      },
      link: postLink
    };
  });
