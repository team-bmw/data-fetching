// const express = require('express');
const Twitter = require('twitter');
const fs = require('fs');
// const app = express();`

// Create a new Twitter object with consumer_key, consumer_secret, access_token_key, access_token_secret in ./.env.js
const client = require('./.env.js');

const fetchData = (endPoint, parameterObj) => {
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
  });
};

fetchData('search/tweets', { q: '#mcdonalds' });

// client.get('search/tweets', { q: '#mcdonalds' }, (error, tweets, response) => {
//   if (error) console.log(error);

//   let tweetsJSON = JSON.stringify(tweets);

//   fs.writeFile('search_tweets.json', tweetsJSON, 'utf8', err => {
//     if (err) {
//       console.log('An error occured while writing JSON');
//       return console.log(err);
//     }

//     console.log('JSON file has been saved');
//   });
// });

// client.get(
//   'statuses/user_timeline',
//   { screen_name: 'realDonaldTrump' },
//   (error, tweets, response) => {
//     if (error) console.log(error);

//     let tweetsJSON = JSON.stringify(tweets);

//     fs.writeFile('statuses_userTimeline.json', tweetsJSON, 'utf8', err => {
//       if (err) {
//         console.log('An error occured while writing JSON');
//         return console.log(err);
//       }

//       console.log('JSON file has been saved');
//     });
//   }
// );

// const timeline = JSON.parse(require('./statuses.userTimeline.json'));

// console.log(timeline.length);
