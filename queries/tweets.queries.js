const Tweet = require('../database/models/tweet.model');

exports.getTweets = () =>{
    return Tweet.find({}).exec();
}
exports.createTweet = (tweet) =>{
    const newTweet = new Tweet(tweet)
    return newTweet.save();
}
exports.deleteTweet = (tweetId) =>{
    return Tweet.findByIdAndDelete(tweetId).exec();
}
exports.getTweet = (tweetId) =>{
    return Tweet.findOne({_id:tweetId}).exec();
}
exports.updateTweet = (tweetId, tweet) =>{
    return Tweet.findByIdAndUpdate(tweetId, { $set: tweet} ,{ runValidators : true}); //ou $set : tweet.content
}
exports.getCurrentUserTweetsWithFollowing = (user) => {
    return Tweet.find({ author: {$in: [...user.following, user._id]}}).populate('author').exec();//Dans ce tableau, nous passons tous les _id des utilisateurs suivis par l'utilisateur courant, ainsi que son _id.
}//populate fonctionne avec le  schema.Types.ObjectId de tweet.model et permet de récup les autres info de l'auteur (avant ça recup que l'id)
exports.getUserTweetsFormAuthorId = (authorId) => {
    return Tweet.find({ author: authorId }).populate('author').exec();
  }
