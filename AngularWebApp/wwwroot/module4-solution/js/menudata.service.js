(function() {
	'use strict';

	angular.module('data')
		.service('MenuDataService', menuDataService);

	menuDataService.$inject = ['$http'];
	function menuDataService($http) {
		var svc = this;

		svc.getAllCategories = function () {
			var promise = $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function onSuccess(response) {
					return response.data;
				}, function onError(response) {
					console.log(response);
				}
			);
			return promise;
		}

		svc.getItemsForCategory = function (categoryShortName) {
			var promise = $http({
				method: 'GET',
				url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
			}).then(function onSuccess(response) {
					return response.data.menu_items;
				}, function onError(response) {
					console.log(response);
				}
			);
			return promise;
		}
	}
})();