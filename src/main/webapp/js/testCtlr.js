'use strict';
var app = angular.module(
		'stepPortalJsApp',
		[
				'ui.router', 'ngResource', 'ngDialog', 'restangular'
		] ).config( function ( RestangularProvider ) {

	RestangularProvider.setBaseUrl( '/angularjs_demo_rest/rest' );

} );

app.controller( 'testCtlr', function ( $rootScope, $scope, Restangular ) {

	$scope.application = {};
	$scope.application.prospect = {};
	
	$scope.submit = function () {
		Restangular.one( "test" ).post( "return", $scope.application.prospect ).then( function ( data ) {
			$scope.application.prospect.entityId = data.entityId;
		} );
	}

} );