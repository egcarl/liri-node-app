# liri-node-app

A basic app to mimic Siri where commands are executed based on user input to retrieve information.

To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You will need these node packages installed:

   * [Twitter](https://www.npmjs.com/package/twitter)
   
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   
   * [Request](https://www.npmjs.com/package/request)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   
   You will also need to create your own .env file with the following information filled in replacing the values with your API keys (no quotes):

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

