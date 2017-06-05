'use strict';

(function () {
	
	var express = require('express');
	var app = express();
	
	require('./Config.js')(app);
	require('./Routes.js')(app);
	
	var path = require('path');
	var rootPath = path.normalize(__dirname + '/../');
	app.use(express.static(rootPath + '/app'));
	app.use('/lib', express.static(rootPath + '/node_modules'));
	
	app.listen(3000);
	console.log('Listening on port 3000...');
})();