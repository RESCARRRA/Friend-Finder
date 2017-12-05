  // DEPENDENCIES
// ==============================================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;

// EXPRESS CONFIGURATION
// ==============================================================================

// process.env.PORT allows Heroku us to determine our PORT or default to 3000 

// Sets up the Express app to handle data parsing (our middleware)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}));


// ROUTER
// Directs our server to our API and HTML "route" files.
// ==============================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// INITIATE LISTENER
// ==============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
