(function () {
	'use strict';

	angular.module('myFirstApp', [])
		.controller('MyFirstController',
			function($scope) {
				$scope.name = 'Ervins';
				$scope.sayHello = function() {
					return 'Hello Coursera';
				};
			});
})();