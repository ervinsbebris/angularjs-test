(function () {
	'use strict';

	angular.module('MenuApp')
		.component('categories',
		{
			templateUrl: 'html/category_list.html',
			bindings: {
				items: '<'
			}
		});
})();