// const express = require('express');
const Twitter = require('twitter');
const fs = require('fs');
// const app = express();`

// Create a new Twitter object with consumer_key, consumer_secret, access_token_key, access_token_secret in ./.env.js
const client = require('./.env.js');

const fetchData = (endPoint, parameterObj, callback) => {
  client.get(endPoint, parameterObj, (error, data, response) => {
    if (error) console.log(error);

    let dataJSON = JSON.stringify(data);
    const fileName = endPoint.split('/').join('') + '.json';

    fs.writeFile(fileName, dataJSON, 'utf8', err => {
      if (err) {
        console.log('An error occured while writing JSON');
        return console.log(err);
      }

      console.log('JSON file has been saved');
    });

    callback(data);
  });
};

// fetchData('search/tweets', { q: '#mcdonalds' });
fetchData(
  'statuses/mentions_timeline',
  {
    screen_name: 'Twitter Dev',
    count: 5,
  },
  tweets => {
    console.log(tweets.length);
  }
);
