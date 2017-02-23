"use strict";

angular.module("WazzyPortfolio").config(function ($mdThemingProvider) {
	$mdThemingProvider.theme("default")
		.primaryPalette("red")
		.accentPalette("grey");
	$mdThemingProvider.theme("default-dark")
		.primaryPalette("red")
		.accentPalette("grey")
		.dark();
});