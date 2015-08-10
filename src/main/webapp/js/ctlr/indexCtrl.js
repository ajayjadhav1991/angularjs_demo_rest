var app = angular.module('testApp',
		[ 'ui.router', 'ngResource', 'ngDialog', 'restangular' ]).config(
		function(RestangularProvider) {

			RestangularProvider.setBaseUrl('/angularjs_demo_rest/rest');

		});
app.controller('testCtlr', function($scope,Restangular) {
	$scope.application = {};
	$scope.application.person = {};
	$scope.application.person.firstName = "Nitin";

	$scope.submit = function() {
		Restangular.one( "test" ).post( "submit", $scope.application.person ).then( function ( data ) {
			$scope.application.person.id = data.id;
		} );
	}
});