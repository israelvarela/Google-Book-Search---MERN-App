var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  authors: String,
  description: String,
  image: Buffer,
  link: String
});

mongoose.model('Post', PostSchema);