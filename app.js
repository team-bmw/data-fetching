const Twitter = require('twitter');
const fs = require('fs');
require('dotenv').config();

// Promisify fs.writeFile
// From callbacks to fs promises to handle the file system in Node.js
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

// Change out keys here:
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// // Promises version of fetch function created by Jacky
const fetchData = (endPoint, parameterObj, callback) => {
  let fileName = endPoint.split('/').join('') + '.json';

  client
    .get(endPoint, parameterObj)
    .then(data => JSON.stringify(data))
    .then(dataJSON => writeFile(fileName, dataJSON, 'utf8'))
    .then(() => console.log('JSON file has been saved'))
    .then(() => require(`./${fileName}`))
    .then(savedData => {
      if (callback) callback(savedData);
    })
    .catch(error => {
      throw error;
    });
};

fetchData(
  'search/tweets',
  { q: 'donaldTrump', count: 100, lang: 'en', tweet_mode: 'extended' },
  tweets => console.log(tweets.statuses.length)
);
// fetchData('statuses/user_timeline', {
//   screen_name: 'realDonaldTrump',
//   count: 200,
// });
