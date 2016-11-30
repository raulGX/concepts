const express = require('express'),
	path = require('path'),
	app = express(),
	rootPath = path.normalize(__dirname + '/app'),
	port = process.env.PORT || 8080;

app.use(express.static(rootPath));

app.listen(port, err => {
	if (err){
		console.log(err);
		process.exit(1);
	}
	console.log('Listening to port:', port);
})
