// const express = require('express');
const Twitter = require('twitter');
const fs = require('fs');
// const app = express();

// Change out keys here:
const client = new Twitter({
  consumer_key: 'dTSiKVlAc4pSKVTKyejgpszRL',
  consumer_secret: 'lSbNSmj0MJ8sJULpI0zJolYLEIk9f4BYFSvPaiEI0lsYTYWpIU',
  access_token_key: '1130184699857522693-KGIrOBJTh8enA4lh3VJFCrSgoRZNVY',
  access_token_secret: 'ixHm5MLcZuCalft1MuBXxy2xgTSo8GH7sYZDMt9zq8bJj',
});

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

const timeline = JSON.parse(require('./statuses.userTimeline.json'));

console.log(timeline.length);
