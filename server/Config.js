"use strict";

var express = require('express'),
	errorhandler = require('errorhandler');

module.exports = function(app) {
	app.all("/api/*", function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept");
		res.header("Access-Control-Allow-Methods", "GET, PUT, POST, HEAD, DELETE, OPTIONS");
		return next();
	});
	
	app.use(errorhandler({
		dumpExceptions: true,
		showStack: true
	}));
};
