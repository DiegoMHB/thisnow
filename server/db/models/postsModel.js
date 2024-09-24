const mongoose = require('../index.js');

const postSchema = new mongoose.Schema({
  username: { type: String, required: true },
  user_id: { type: String, required: true },
  email: { type: String, required: true },
  tag: { type: String, required: true },
  category: { type: String, required: true },
  details: { type: String, required: true },
  post_pictures: Array,
  city: { type: String, required: true },
  coordinates: Array,
  lifespan: { type: Number, required: true },
},
  { timestamps: true }
);


const postModel = mongoose.model('Post', postSchema);

const newPost = async function (post) {
  const newPost = await postModel.create(post);
  return newPost

};

const getAllPosts = async function () {
  const users = await postModel.find({});
  return users
}

module.exports = { getAllPosts, newPost };