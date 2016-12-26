var mongoose = require('mongoose');
var schemaNews = new mongoose.Schema({
        status: String,
        source:String,
        sortBy:String,
        author:String,
        title:String,
        url:String,
        urlToImage:String,
        publishedAt:String,
      });
var newsModelExport = mongoose.model('newsModel', schemaNews);

module.exports = newsModelExport;
