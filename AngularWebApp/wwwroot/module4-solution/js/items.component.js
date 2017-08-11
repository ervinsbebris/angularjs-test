(function () {
	'use strict';

	angular.module('MenuApp')
		.component('items',
			{
				templateUrl: 'html/items_list.html',
				bindings: {
					items: '<'
				}
			});
})();