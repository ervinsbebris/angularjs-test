(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', toBuyController)
		.controller('AlreadyBoughtController', alreadyBoughtController)
		.service('ShoppingListCheckOffService', shoppingListCheckOffService);

	toBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function toBuyController($scope, shoppingListCheckOffService) {
		var controller = this;
		controller.toBuyList = shoppingListCheckOffService.toBuyList;
		$scope.isEverythingBought = false;
		$scope.itemsBought = 0;
		
		$scope.bought = function(index) {
			shoppingListCheckOffService.bought(index);
			$scope.isEverythingBought = controller.toBuyList.length === 0;
			$scope.itemsBought++;
		}
	};

	alreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function alreadyBoughtController($scope, shoppingListCheckOffService) {
		var controller = this;
		controller.alreadyBoughtList = shoppingListCheckOffService.alreadyBoughtList;
		$scope.isNothingBought = true;

		$scope.$watch('itemsBought', function() {
			$scope.isNothingBought = controller.alreadyBoughtList.length === 0;	
		});
	}

	function shoppingListCheckOffService() {
		var service = this;
		service.toBuyList = [
			{ name: "Cookies", quantity: 10 },
			{ name: "Chips", quantity: 20 },
			{ name: "Milk", quantity: 5 },
			{ name: "Bread", quantity: 10 },
			{ name: "Toothpaste", quantity: 15 }
		];
		service.alreadyBoughtList = [];
		
		service.bought = function (index) {
			var item = service.toBuyList[index];
			service.toBuyList.splice(index, 1);
			service.alreadyBoughtList.push(item);
		}
	}
})();
