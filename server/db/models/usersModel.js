const mongoose = require('../index.js');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_picture: { type: String, required: false },
  posts: Array},
  { timestamps: true });

const userModel = mongoose.model('User', userSchema);

const login = async function (username, pass) {
  const user = await userModel.findOne({ username });
  if (!user) {
    return 'No valid user name'
  } else if (user && user.password === pass) {
    return user
  } else {
    return 'Wrong password'
  }
}

const newUser = async function (user) {
  const newUser = await userModel.create(user);
  return newUser
}

const getAllUsers = async function () {
  const users = await userModel.find({});
  return users
}

const getUserById = async function (id) {
  const user = await userModel.findById(id);
  if (!user) {
    return null; 
  }
  return user;
};

module.exports = { newUser, getAllUsers, login , getUserById}
