const mongoose = require('../index.js');


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  profile_picture: String,
  posts: Array,
  dateLogin: Date,
  friends: Array,
});

const userModel = mongoose.model('User', userSchema);



const newUser = async function (user) {
  const newUser = await userModel.create(user);
  return newUser
}

const getAllUsers = async function () {
  const users = await userModel.find({});
  return users
}

const getOneUser = async function (id) {

  const user = await userModel.findById(id);
  return user
}


module.exports = { newUser, getAllUsers, getOneUser}
