const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb+srv://poojaprajil:dhruv@cluster0.go4ep.mongodb.net/Blogdb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name: String,
    title: String,
    description: String,
    username: String,
    upvotes: Number,
    comments: Array
});

var ArticleInfo = mongoose.model('articles', articleSchema);

module.exports = ArticleInfo;