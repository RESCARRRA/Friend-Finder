  // DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ROUTING
// ===============================================================================
module.exports = function(app) {
  
  // survey.html is delivered to user when that route is accessed
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // app.get("/home", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

 // If no matching route/predifned url is found, default to home.html
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
 };

