(function() {
	'use strict';

	angular.module('MenuApp')
		.controller('categoriesController', categoriesController);

	categoriesController.$inject = ['items'];

	function categoriesController(items) {
		var list = this;

		list.items = items;
	}
})();