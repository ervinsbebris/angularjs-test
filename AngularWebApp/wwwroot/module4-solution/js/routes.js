(function () {
	'use strict';

	angular.module('MenuApp')
		.config(routesConfig);

	routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.hashPrefix('');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'html/home.html'
				//template: '<div>Welcome to our Restaurant</div>'
			});

		$stateProvider
			.state('categories', {
				url: '/categories',
				templateUrl: 'html/categories.html',
				controller: 'categoriesController as list',
				resolve: {
					items: ['MenuDataService', function(MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			});

		$stateProvider
			.state('categories.items', {
				url: '/items/{categoryShortName}',
				templateUrl: 'html/items.html',
				controller: 'itemsController as list',
				resolve: {
					items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
						return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
					}]
				}
			});

		$urlRouterProvider.otherwise('/home');
	}
})();