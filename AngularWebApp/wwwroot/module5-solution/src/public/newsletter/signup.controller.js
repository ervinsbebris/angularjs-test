(function () {
	"use strict";

	angular.module('public')
		.controller('SignupController', SignupController);

	SignupController.$inject = ['$http', 'ApiPath', 'SignupService'];
	function SignupController($http, ApiPath, SignupService) {
		var $ctrl = this;
		$ctrl.userData = SignupService.userData;
		$ctrl.saved = SignupService.userData.menuNumber != null;
		$ctrl.menuNumberDoesNotExist = false;

		$ctrl.signup = function () {

			var promise = SignupService.CheckMenuNumber($ctrl.userData.menuNumber);

			promise.then(function (response) {
				$ctrl.menuNumberDoesNotExist = false;
				$ctrl.userData.menuItem = response;
				SignupService.SaveInfo($ctrl.userData);
				$ctrl.saved = true;
			},
			function (error) {
				$ctrl.menuNumberDoesNotExist = true;
				$ctrl.saved = false;
			})
			.catch(function (err) {
				$ctrl.menuNumberDoesNotExist = true;
				$ctrl.saved = false;
			});
		};
	}


})();
