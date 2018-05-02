//setting global keys and setups for apis
require('dotenv').config();
const fs = require('fs')
const Spotify = require('node-spotify-api')
const Twitter = require('twitter')
const request = require('request')

const keys = require('./keys')
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);
const omdb = (keys.omdb.key);

//defining variables for actions and search criteria from user input
var action = process.argv[2];
var nodeArgs = process.argv;
var value = ""
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    value = value + "+" + nodeArgs[i];
  } else {
    value = value + nodeArgs[i];
  }
}
//determing function to be executed based on user input
switch (action) {
  case 'my-tweets': twitterRequest();
    break;
  case 'spotify-this-song': spotifyThisSong(value);
    break;
  case 'movie-this': omdbQuery(value);
    break;
  case 'do-what-it-says': textCommand();
}

//query spotify for user entered track name.  if track name is blank, then query for "The Sign"
function spotifyThisSong(value) {
  if (value === "") {
    value = "The Sign"
  }
  spotify.search({ type: 'track', query: value, limit: 1 },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("Track Tile: ", data.tracks.items[0].name)
      console.log("Artist Name: ", data.tracks.items[0].artists[0].name)
      console.log("Album Title: ", data.tracks.items[0].album.name)
      console.log("Track Link: ", data.tracks.items[0].external_urls.spotify)
      appendFile("-----------------------" + '\r\n')
      appendFile("Spotify search for: " + value + '\r\n')
      appendFile('Results for search: ' + data.tracks.items[0].name + '\r\n')
    });
}

// Query twitter for my shell account's last 20 tweets (i don't tweet as you can see)
function twitterRequest() {
  var params = { screen_name: 'sfEricForClass', count: 20 };
  client.get('statuses/user_timeline', params, function (err, tweets, response) {
    if (!err) {
      console.log("My latest tweets")
      for (i = 0; i < tweets.length; i++) {
        console.log("-----------------------------")
        console.log(tweets[i].text)
        console.log(tweets[i].created_at)
        appendFile("-----------------------------\r\n ")
        appendFile('Twitter Results: ' + tweets[i].text + '\r\n')
      }
    }
  });
}

//Query the omdb api for movie information based on the title entered
function omdbQuery(value) {
  request('http://www.omdbapi.com/?apikey=' + omdb + '&t=' + value, function (err, response, body) {
    if (err) {
      console.log('error:', error)
      return
    }

    console.log('Title: ' + JSON.parse(body).Title)
    console.log('Year: ' + JSON.parse(body).Year)
    console.log('Ratings IMDB: ' + JSON.parse(body).Ratings[0].Value)
    console.log('Ratings Rotten Tomatoes: ' + JSON.parse(body).Ratings[1].Value)
    console.log('Country: ' + JSON.parse(body).Country)
    console.log('Language: ' + JSON.parse(body).Language)
    console.log('Plot: ' + JSON.parse(body).Plot)
    console.log('Actors: ' + JSON.parse(body).Actors)

    appendFile("-----------------------------\r\n ")
    appendFile('Title: ' + JSON.parse(body).Title + '\r\n')
    appendFile('Year: ' + JSON.parse(body).Year + '\r\n')
    appendFile('Ratings IMDB: ' + JSON.parse(body).Ratings[0].Value + '\r\n')
    appendFile('Ratings Rotten Tomatoes: ' + JSON.parse(body).Ratings[1].Value + '\r\n')
    appendFile('Country: ' + JSON.parse(body).Country + '\r\n')
    appendFile('Language: ' + JSON.parse(body).Language + '\r\n')
    appendFile('Plot: ' + JSON.parse(body).Plot + '\r\n')
    appendFile('Actors: ' + JSON.parse(body).Actors + '\r\n')
  });
}

//function to run the existing instructions set in the random.txt file.  Added console log info to tell the user what function was run.
function textCommand() {
  fs.readFile('random.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log(err)
    }

    var dataArr = data.split(',')
    var action = dataArr[0]
    var value = dataArr[1]


    switch (action) {
      case 'my-tweets':
        twitterRequest();
        console.log('You searched my tweets')
        break;
      case 'spotify-this-song':
        spotifyThisSong(value);
        console.log('You did a spotify search for ' + value)
        break;
      case 'movie-this':
        value = value;
        omdbQuery(value);
        console.log('You did a movie search for ' + value)
        break;
    }
  })

}
// function to append data from queries to log file
function appendFile(dataToAppend) {
  fs.appendFile("log.txt", dataToAppend, function (err) {
    if (err) {
      console.log(err)
    }
  })
}