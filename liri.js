require("dotenv").config();
var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var action = process.argv[2];
var input = process.argv[3];

spotify.search({ type: 'track', query: action }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
