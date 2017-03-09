var mongoose = require('mongoose');
//var mongoURI = 'mongodb://bachu:bachu@ds019856.mlab.com:19856/mean2stack'//'mongodb://localhost:27017/mean2stack1';
mongoose.connect('mongodb://bachu:bachu@ds019856.mlab.com:19856/mean2stack');// || 'mongodb://localhost:27017/mean2stack1');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    postPath: String,
    postTitle : String,
    postSubtitle: String,
    postMeta : String,
    postContent : String,
    postTopic: String
});

var Posts = mongoose.model('posts',postSchema);

exports.getAllposts = function(req, res) {
    Posts.find({postTopic:req.body.postTopic},function(err,docs){
        
            res.json(docs);
    });    
};
exports.getPost = function(req, res) {
          Posts.findOne({postPath:req.body.postPath},function(err,docs){
            res.json(docs);
    });
};
