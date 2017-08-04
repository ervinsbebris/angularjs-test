(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', narrowItDownController)
		.service('MenuSearchService', menuSearchService)
		.directive('foundItems', foundItemsDirective);

	narrowItDownController.$inject = ['$scope', 'MenuSearchService'];
	function narrowItDownController($scope, menuSearchService) {
		var ctrl = this;

		ctrl.found = '';
		ctrl.nothing = true;

		ctrl.executeSearch = function () {
			ctrl.nothing = false;

			if (ctrl.searchTerm.trim() === '') {
				ctrl.found = '';
				return;
			}

			var promise = menuSearchService.getMatchedMenuItems(ctrl.searchTerm);
			promise.then(function(filteredItems) {
				ctrl.found = filteredItems;
			});
		};

		ctrl.removeItem = function (index) {
			ctrl.found.splice(index, 1);
		}
	}

	menuSearchService.inject = ['$http', '$filter'];
	function menuSearchService($http, $filter) {
		var svc = this;

		svc.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
				})
				.then(function (result) {
				// process result and only keep items that match
					var foundItems = result.data.menu_items;

					var filteredItems = $filter('filter')(foundItems, { description: searchTerm });

				// return processed items
					return filteredItems;
			});
		}
	}

	function foundItemsDirective() {
		var ddo = {
			restrict: 'E',
			templateUrl: 'foundItems.html',
			scope: {
				list: '<items',
				nothing: '<',
				onRemove: '&'
			}
		};
		return ddo;
	}
})();