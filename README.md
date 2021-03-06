# liri-node-app

A basic app to mimic Siri where commands are executed based on user input to retrieve information.

1. To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You will need these node packages installed:

   * [Twitter](https://www.npmjs.com/package/twitter)
   
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   
   * [Request](https://www.npmjs.com/package/request)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

   * Not a node package, but you will need to go here for an API key: [OMDB](http://www.omdbapi.com/)

   * Not a node package, but you will need to go here for an API key:  [Spotify](https://developer.spotify.com/my-applications/#!/)

   * Not a node package, but you will need to go here for an API key: [Twitter](https://apps.twitter.com/app/new)

   
2.  You will also need to create your own .env file with the following information filled in replacing the values with your API keys:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

# OMDB API keys

OMDB_KEY=your-omdb-api-key
```
3. The following commands typed in will execute specific functions:


my-tweets: will return my most recent 20 tweets

spotify-this-song: returns track information for the entered track after the command
 
movie-this: returns movie information based on the movie name typed after the command
 
do-what-it-says: exectues the action included in the random.txt file
