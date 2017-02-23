'use strict';

angular.module('WazzyPortfolio', [
	'ngMaterial',
	'ngRoute'
	
]).config(function($mdIconProvider) {
	$mdIconProvider
		.defaultIconSet('styles/mdi.svg')
});