const mongoose = require('../index.js');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_picture: { type: String, required: false },
  posts: Array,
  member_since: { type: Date, default: Date.now },
  friends: Array,
});

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
  console.log(newUser)
  return newUser
}

const getAllUsers = async function () {
  const users = await userModel.find({});
  return users
}





module.exports = { newUser, getAllUsers, login }
