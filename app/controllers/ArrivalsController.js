"use strict";

angular.module("WazzyPortfolio").controller("ArrivalsController", function($scope, $http, $log) {
	
	$scope.greeting = "This is the Arrivals Page!";
	
	$scope.prices = [
		{show:'$200', value:200},
		{show:'$300', value:300},
		{show:'$400', value:400},
		{show: '$500', value:500}
	];
	
	$scope.cities = [];
	
	$scope.callAPI = function () {
		$http.get('/api/v1/cities')
			.then(function(resp) {
				$scope.cities = (JSON.parse(resp.data.info)).Cities;
				$log.log($scope.cities);
			}, function (err) {
				$log.log(err.data);
			});
	};
});
