(function () {
	"use strict";

	angular.module('public')
		.controller('MyinfoController', MyinfoController);

	MyinfoController.$inject = ['$http', 'ApiPath', 'SignupService'];
	function MyinfoController($http, ApiPath, SignupService) {
		var $ctrl = this;
		$ctrl.userData = SignupService.userData;
		$ctrl.saved = SignupService.userData.menuNumber != null;
	}
})();
