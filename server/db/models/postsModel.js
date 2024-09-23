const mongoose = require('../index.js');

const postSchema = new mongoose.Schema({
  user_id: Object,
  username: String,
  email: String,
  post_pictures: Array,
  city: String,
  coordinates : Array,
  date: Date,
  expiration: Date,
  details: String,
  tag: String
});


const postModel = mongoose.model('Post', postSchema );

const postOne = async function (post) {
  return await postModel.create(post);
  
  
};

module.exports = { postOne };