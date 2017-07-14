(function () {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', lunchCheckController);

	lunchCheckController.$inject = ['$scope'];
	function lunchCheckController($scope) {
		$scope.menuResult = "";

		$scope.checkMenu = function() {
			$scope.menuResult = getCount($scope.menuText);
		}

		function getCount(string) {
			if (string === "") {
				return "Please enter data first";
			}
			var items = string.split(",");
			if (items.length > 3) {
				 return "Too much!";
			}
			return "Enjoy!";
		}
	};
})();
