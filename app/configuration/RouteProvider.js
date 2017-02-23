"use strict";

angular.module("WazzyPortfolio").config(function ($routeProvider){

    $routeProvider.
    when("/Dashboard", {
        templateUrl: "views/dashboard.html",
		controller: "DashboardController"
    }).
    when("/Arrivals", {
        templateUrl: "views/arrivals.html",
		controller: "ArrivalsController"
    }).
    when("/Departures", {
        templateUrl: "views/departures.html",
		controller: "DeparturesController"
    }).
    otherwise({
        redirectTo: "/Dashboard"
    });
});
