(function () {
	"use strict";

	angular.module('public')
		.service('SignupService', SignupService);

	SignupService.$inject = ['$http', 'ApiPath'];
	function SignupService($http, ApiPath) {
		var $svc = this;
		$svc.userData = {};

		$svc.CheckMenuNumber = function (menuNumber) {
			var promise = $http({
				method: 'GET',
				url: ApiPath + '/menu_items/' + menuNumber + '.json'
			}).then(function onSuccess(response) {
					return response.data;
				}, function onError(response) {
					console.log(response);
					throw new Error('Menu number does not exist');
				}
			);
			return promise;
		};

		$svc.SaveInfo = function (userData) {
			$svc.userData = userData;
		}
	}

})();
