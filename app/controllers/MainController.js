"use strict";

angular.module("WazzyPortfolio").controller("MainController", function($scope) {
	$scope.date = new Date();
	$scope.theme = "default";
	$scope.currentNavItem = "dashboard";
	
	this.isOpen = false;
	this.selectedMode = "md-scale";
	this.selectedDirection = "left";
});