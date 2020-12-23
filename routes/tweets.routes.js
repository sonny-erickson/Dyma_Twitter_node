const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');
const { tweetList, tweetNew, tweetCreate, tweetDelete, tweetEdit, tweetUpdate} = require('../controllers/tweets.controller');

//Définir les routes ci-dessous
router.get('/', tweetList );
router.get('/new', tweetNew);
router.post('/', tweetCreate);
router.get('/edit/:tweetId', tweetEdit);
router.post('/update/:tweetId', tweetUpdate)
router.delete('/:tweetId', tweetDelete);

module.exports = router; 