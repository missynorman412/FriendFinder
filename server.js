// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
module.exports = function() {
	 console.log('___ENTER htmlRoutes.js___');

	// Home page
	app.get('/Public', function(req, res) {
        res.sendFile(path.join(__dirname, 'home.html'));
      });

	// Survey page
	app.get('/Public', function(req, res) {
		res.sendFile(path.join(__dirname, 'survey.html'));
	});
};


// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, '/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});