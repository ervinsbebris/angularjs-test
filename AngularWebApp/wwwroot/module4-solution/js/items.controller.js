(function() {
	'use strict';

	angular.module('MenuApp')
		.controller('itemsController', itemsController);

	itemsController.$inject = ['items'];

	function itemsController(items) {
		var list = this;

		list.items = items;
	}
})();