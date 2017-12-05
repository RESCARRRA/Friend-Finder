  // ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../app/data/friends.js");


// ROUTING
// ===============================================================================

// Alternative (to below)
  // route = function(app){}
  //   module.exports = route;

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);

  });
  

  // API POST Requests
  // --------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // friends.push(req.body);
    
    var bestFriend = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    
    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for(var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++){
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= bestFriend.friendDifference){

          bestFriend.name = friends[i].name;
          bestFriend.photo = friends[i].photo;
          bestFriend.friendDifference = totalDifference;

        }
      }
    }

    friends.push(userData);

    res.json(bestFriend);
    // friends.push(bestFriend);
  });
}
    